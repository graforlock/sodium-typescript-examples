import SLabel from './slabel';
import STextField from './stext-field';

import {Cell} from 'sodiumjs';

class FRP
{
    public static main()
    {
        const textA: STextField = new STextField("0");
        const textB: STextField = new STextField("0");

        const sum: Cell<number> = textA.text.lift(textB.text, (a, b) =>
        {
            return parseInt(a) + parseInt(b);
        });

        const lblSum: SLabel = new SLabel(sum.map(i => i.toString()));
    }
}

FRP.main();