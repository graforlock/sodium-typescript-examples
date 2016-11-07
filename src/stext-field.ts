import Component from './Component';
import DOMEvent from './DOMEvent';

import {Cell, Stream, StreamSink} from 'sodiumjs';

class TextField implements Component
{
    private l: any;
    public text: Cell<string>;
    public sUserChanges: Stream<string>;

    private allow: Cell<boolean>;
    private input: HTMLInputElement;

    constructor(initText: string, sText: Stream<string> = new Stream<string>())
    {

        this.allow = sText.map(u => 1)
            .accum(0, (d, b) => b + d)
            .map(b => b == 0);

        const sUserChangesSnk: StreamSink<string> = new StreamSink<string>();
        this.sUserChanges = sUserChangesSnk;

        this.text = sUserChangesSnk
            .gate(this.allow)
            .orElse(sText)
            .hold(initText);

        this.input = document.createElement('input');
        this.input.value = this.text.sample();
        this.input.addEventListener('input', (event: DOMEvent) =>
        {
            this.text = this.text.map(() => event.target.value);
            sUserChangesSnk.send(event.target.value);
        });

        this.render();

        /* TODO: Missing Transaction.post() API
           doesnt allow to register listener at this point. */
    }

    render(): void
    {
        document.body.appendChild(this.input);
    }
}

export default TextField;
