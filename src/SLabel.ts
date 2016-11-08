import {Cell, Operational, Transaction} from 'sodiumjs';

class SLabel
{
    private label: HTMLElement;
    private l: any;

    constructor(text: Cell<string>)
    {
        this.l = Operational.updates(text).listen(t =>
        {
            this.setText(t);
        });

        this.label = document.createElement('h5');
        this.render();


         Transaction.currentTransaction.post(0, () =>
         {
            this.setText(text.sample());
         })

    }

    setText(text: string)
    {
        this.label.textContent = text;
    }

    render()
    {
        document.body.appendChild(this.label);
    }
}

export default SLabel;