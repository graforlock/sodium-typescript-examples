import { Cell, StreamSink } from 'sodiumjs';

import UpDown from './UpDown';

class PumpFace {
    //private l: any = new Listener();
    private readonly presetLCD: Cell<Array<number>> ;
    private readonly saleCostLCD: Cell<Array<number>> ;
    private readonly saleQuantityLCD: Cell<Array<number>> ;
    private readonly priceLCD1: Cell<Array<number>> ;
    private readonly priceLCD2: Cell<Array<number>> ;
    private readonly priceLCD3: Cell<Array<number>> ;
    private readonly nozzles: Cell<UpDown>[] = new Array<Cell<UpDown>>(3);
    public readonly nozzleRects: Cell<any>[]  = new Array<Cell<UpDown>>(3);
    constructor(
        rootPath: string,
        sClick: StreamSink<Point>,
        presetLCD: Cell<Array<number>>,
        saleCostLCD: Cell<Array<number>>,
        saleQuantityLCD: Cell<Array<number>>,
        priceLCD1: Cell<Array<number>>,
        priceLCD2: Cell<Array<number>>,
        priceLCD3: Cell<Array<number>>,
        nozzle1: Cell<UpDown>,
        nozzle2: Cell<UpDown>,
        nozzle3: Cell<UpDown> 
    ) {
        this.presetLCD = presetLCD;
        this.saleCostLCD = saleCostLCD;
        this.saleQuantityLCD = saleQuantityLCD;
        this.priceLCD1 = priceLCD1;
        this.priceLCD2 = priceLCD2;
        this.priceLCD3 = priceLCD3;
        this.nozzles[0] = nozzle1;
        this.nozzles[1] = nozzle2;
        this.nozzles[2] = nozzle3;
    }
    // TODO: rest

}