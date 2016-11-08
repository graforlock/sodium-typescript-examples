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