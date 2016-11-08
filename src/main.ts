import Button from './SButton';
import SLabel from './SLabel';
import { CellLoop, Stream, Transaction } from 'sodiumjs';

class FRP
{
    public static main()
    {
        Transaction.run(() =>
        {
            const value: CellLoop<number> = new CellLoop<number>();
            const label: SLabel = new SLabel(value.map(i => i.toString()));

            const btnPlus: Button = new Button("+");
            const btnMinus: Button = new Button("-");

            const sDelta: Stream<number> = btnPlus.sClicked.map(u => 1)
                .orElse(btnMinus.sClicked.map(u => -1));

            const sUpdate: Stream<number> = sDelta.snapshot(value, (delta, _value) =>
            {
                return delta + _value;
            }).filter(n => n >= 0);

            value.loop(sUpdate.hold(0));

        });
    }
}

FRP.main();