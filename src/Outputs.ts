import {Cell, Stream, Unit} from 'sodiumjs';

class Outputs
{
    constructor(public readonly delivery: Cell<Delivery> = new Cell<Delivery>(Delivery.OFF),
    public readonly presetLCD: Cell<string> = new Cell<string>(""),
    public readonly saleCostLCD: Cell<string> = new Cell<string>(""),
    public readonly saleQuantityLCD: Cell<string> = new Cell<string>(""),
    public readonly priceLCD1: Cell<string> = new Cell<string>(""),
    public readonly priceLCD2: Cell<string> = new Cell<string>(""),
    public readonly priceLCD3: Cell<string> = new Cell<string>(""),
    public readonly sBeep: Stream<Unit> = new Stream<Unit>(),
    public readonly sSaleComplete: Stream<Sale> = new Stream<Sale>())
    {}
    public setDelivery(delivery: Cell<Delivery>) : Outputs
    {
        return new Outputs(delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setPresetLCD(presetLCD: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setSaleCostLCD(saleCostLCD: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setSaleQuantityLCD(saleQuantityLCD: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setPriceLCD1(priceLCD1: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setPriceLCD2(priceLCD2: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, priceLCD2, this.priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setPriceLCD3(priceLCD3: Cell<string>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, priceLCD3, this.sBeep,
                           this.sSaleComplete)
    }
    public setBeep(sBeep: Stream<Unit>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, sBeep,
                           this.sSaleComplete);
    }
    public setSaleComplete(sSaleComplete: Stream<Sale>) : Outputs
    {
        return new Outputs(this.delivery, this.presetLCD, this.saleCostLCD, this.saleQuantityLCD, 
                           this.priceLCD1, this.priceLCD2, this.priceLCD3, this.sBeep,
                           sSaleComplete);
    }
}

export default Outputs;