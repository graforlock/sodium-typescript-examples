import {Cell, Stream, StreamSink, StreamLoop, Transaction} from 'sodiumjs';

interface InputEvent extends Event
{
    target;
}

class TextField
{
    private l: any;
    public text: Cell<string>;
    public sUserChanges: Stream<string>;
    
    private allow: Cell<boolean>;
    private input: HTMLInputElement;

    constructor(initText: string, sText: Stream<string> = new Stream<string>())
    {

        const sUserChangesSnk: StreamSink<string> = new StreamSink<string>();
        this.sUserChanges = sUserChangesSnk;

        this.text = sUserChangesSnk
            .hold(initText);

        this.input = document.createElement('input');
        this.input.value = this.text.sample();
        this.input.addEventListener('input', (event: InputEvent) =>
        {
            this.text = this.text.map(() => event.target.value);
            sUserChangesSnk.send(event.target.value);
        });

        this.render();

        this.l = sText.listen(text => {
            this.setText(text);
        });
    }

    private setText(text: string) : void
    {
        this.input.value = text;
    }

    render() : void
    {
        document.body.appendChild(this.input);
    }
}

export default TextField;
