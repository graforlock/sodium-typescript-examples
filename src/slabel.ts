import {Cell, Operational} from 'sodiumjs';

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

        /* TODO: Missing Transaction.post() API
           doesn't allow to sample text at this point.

            Example:

         Transaction.post(0, () =>
         {
            this.setText(text.sample());
         })
         ;*/

    }

    setText(t: string)
    {
        this.label.textContent = t;
    }

    render()
    {
        document.body.appendChild(this.label);
    }
}

export default SLabel;