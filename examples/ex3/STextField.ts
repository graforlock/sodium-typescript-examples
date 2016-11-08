import {Cell, Stream, StreamSink} from 'sodiumjs';
import Component from './Component';

interface InputEvent extends Event
{
    target;
}

class TextField implements Component
{
    private l: any;
    public text: Cell<string>;
    public sText: Cell<string>;
    public sUserChanges: Stream<string>;

    private input: HTMLInputElement;

    constructor(initText: string, sText: Stream<string> = new Stream<string>())
    {

        const sUserChangesSnk: StreamSink<string> = new StreamSink<string>();
        this.sUserChanges = sUserChangesSnk;
        this.sText = sText.hold(initText);

        this.text = sUserChangesSnk
            .hold(initText);

        this.input = document.createElement('input');
        this.input.value = this.text.sample();
        this.input.addEventListener('input', (event: InputEvent) =>
        {
            this.text = this.text.map(() => event.target.value);
            sUserChangesSnk.send(event.target.value);
        });

        this.l = this.sText.listen(text => {
            this.setText(text);
        });

        this.render();
    }

    private setText(text: string) : void
    {
        this.input.value = String(text);
    }

    render() : void
    {
        document.body.appendChild(this.input);
    }
}

export default TextField;
