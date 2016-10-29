import {Cell, Stream, StreamSink, StreamLoop} from 'sodiumjs';

interface InputEvent extends Event
{
    target;
}

class TextField
{
    public text: Cell<string>;
    public sUserChanges: Stream<string>;

    private input: HTMLInputElement;

    constructor(initText: string)
    {

        const sUserChangesSnk: StreamSink<string> = new StreamSink<string>();
        this.sUserChanges = sUserChangesSnk;

        this.text = sUserChangesSnk
            .filter(s => parseInt(s) === parseInt(s))
            .hold(initText);

        this.input = document.createElement('input');
        this.input.value = this.text.sample();
        this.input.addEventListener('input', (event: InputEvent) =>
        {
            this.text = this.text.map(() => event.target.value);
            sUserChangesSnk.send(event.target.value);
        });

        this.render();
    }

    render(): void
    {
        document.body.appendChild(this.input);
    }
}

export default TextField;
