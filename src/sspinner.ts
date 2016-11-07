import STextField from './stext-field';
import SButton from './SButton';

import Num from './Num';

import {StreamLoop, Stream, Cell, Transaction} from 'sodiumjs';

class SSpinner
{
    private value: Cell<number>;

    constructor(initValue: number)
    {
        Transaction.run(() =>
        {
            const sSetValue: StreamLoop<number> = new StreamLoop<number>();
            const textField: STextField = new STextField(String(initValue), sSetValue.map(v => String(v)));
           
            this.value = textField.text.map(s => Num.tryParse(s));

            const plus: SButton = new SButton("+");
            const minus: SButton = new SButton("-");

            const sPlusDelta: Stream<number> = plus.sClicked.map(u => 1);
            const sMinusDelta: Stream<number> = minus.sClicked.map(u => -1);
            const sDelta: Stream<number> = sPlusDelta.orElse(sMinusDelta);

            sSetValue.loop(
                sDelta.snapshot(
                    this.value,
                    (delta, value) => delta + value
                ));
        });
    }

}

export default SSpinner;