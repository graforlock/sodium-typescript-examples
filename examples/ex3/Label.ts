class Label
{
    private readonly text: string;
    private readonly label: HTMLLabelElement;

    constructor(initText: string)
    {
        this.label = document.createElement("label");
        this.label.textContent = initText;
        this.text = initText;
        this.render();
    }

    render() : void
    {
        document.body.appendChild(this.label);
    }
}

export default Label;