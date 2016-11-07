import { CellSink, Cell } from 'sodiumjs';
import SelectBox from './SelectBox';
import DOMEvent from './DOMEvent';

class SSelectBox extends SelectBox
{
    public readonly selectedItem: Cell<Element>;

    constructor(ListModel: Array<string>)
    {
        super(ListModel);
        const selectedItem: CellSink<Element> = new CellSink<Element>(this.getSelectedItem());
        this.selectBox.addEventListener('change', (e: DOMEvent) =>
        {
            selectedItem.send(e.target.selectedOption);
        });

        this.selectedItem = selectedItem;
    }    
}

