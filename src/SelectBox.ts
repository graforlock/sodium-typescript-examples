class SelectBox
{
    protected selectBox: HTMLSelectElement;

    constructor(ListModel: Array<string>)
    {
        this.selectBox = this.createSelectBox(ListModel);
        this.render();
    }    
    private createSelectBox(ListModel: Array<string>) : HTMLSelectElement
    {
        const selectBox: HTMLSelectElement = document.createElement('select');
        for(let i = 0; i < ListModel.length; i++)
        {
            let optionNode: HTMLOptionElement = document.createElement('option');
                optionNode.value = ListModel[i].toLowerCase();
                optionNode.textContent = ListModel[i];
                
                if(i === 0) { optionNode.setAttribute('selected',''); }
                selectBox.appendChild(optionNode);
        }
        return selectBox;
    }

    protected getSelectedItem() : Element
    {
      return this.selectBox.querySelector('option[selected]');   
    }

    private render() : void
    {
        document.body.appendChild(this.selectBox);
    }
}

export default SelectBox;