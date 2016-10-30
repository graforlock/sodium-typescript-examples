import {Unit, Stream, StreamSink, Operational, Cell} from 'sodiumjs';

class SButton
{
    private button: HTMLElement;
    private sClickedSink: StreamSink<Unit>;
    private l: any;

    public sClicked: Stream<Unit>;

    constructor(name: string, enabled: Cell<boolean> = new Cell<boolean>(true))
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

        /* TODO: Missing Transactional.post API for:

           Transaction.post(() => this.setEnabled(enabled.sample()));

        */

        this.l = Operational.updates(enabled).listen(ena => this.setEnabled(ena));
    }

    setEnabled(enabled: boolean) : void
    {
        if(enabled === true)
        {
            this.button.style.opacity = "1";
            this.button.style.pointerEvents = "auto";
        }
    }

    render(): SButton
    {
        document.body.appendChild(this.button);
        return this;
    }
}

export default SButton;