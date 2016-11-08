import {Unit, Stream, StreamSink} from 'sodiumjs';

class Button
{
    private button: HTMLElement;
    private sClickedSink: StreamSink<Unit>;

    public sClicked: Stream<Unit>;

    constructor(name: string)
    {
        this.button = document.createElement('button');
        this.button.textContent = name;
        this.sClickedSink = new StreamSink<Unit>();
        this.sClicked = this.sClickedSink;

        this.button.addEventListener('click', (event: Event) =>
        {
            this.sClickedSink.send(Unit.UNIT);
        });

        this.render();
    }

    render(): Button
    {
        document.body.appendChild(this.button);
        return this;
    }
}

export default Button;