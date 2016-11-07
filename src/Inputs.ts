import {Stream, Cell, Unit} from 'sodiumjs';

class Inputs
{
    constructor(public readonly sNozzle1: Stream<UpDown>,
    public readonly sNozzle2: Stream<UpDown>,
    public readonly sNozzle3: Stream<UpDown>,
    public readonly sKeypad: Stream<Key>,
    public readonly sFuelPulses: Stream<number>,
    public readonly calibration: Cell<number>,
    public readonly price1: Cell<number>,
    public readonly price2: Cell<number>,
    public readonly price3: Cell<number>,
    public readonly sClearSale: Stream<Unit>){}
}

export default Inputs;