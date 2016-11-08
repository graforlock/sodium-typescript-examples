import {Unit, Stream, StreamSink, Operational, Cell, Transaction} from 'sodiumjs';

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

        this.button.addEventListener('click', () =>
        {
            this.sClickedSink.send(Unit.UNIT);
        });

        Transaction.currentTransaction.post(0, () => this.setEnabled(enabled.sample()));

        this.l = Operational.updates(enabled).listen(ena => this.setEnabled(ena));
        this.render();
    }

    setEnabled(enabled: boolean): void
    {
        this.button.style.opacity = enabled ? "1" : "0.5";
        this.button.style.pointerEvents = enabled ? "auto" : "none";
    }


    render(): SButton
    {
        document.body.appendChild(this.button);
        return this;
    }
}

export default SButton;