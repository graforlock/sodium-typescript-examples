import STextField from './stext-field';
import Label from './label';

import Arr from './Arr';

import {transactionally, Cell} from 'sodiumjs';

class FRP
{
    public static readonly maxEmails: number = 4;

    public static main()
    {
        const labels: Array<Label> = new Array<Label>();
        const fields: Array<STextField> = new Array<STextField>();

        const valids: Array<Cell<string>> = Arr.newInstance<Cell<string>>(new Cell<string>(""), FRP.maxEmails + 2);

        const row: number = 0;

        const name: STextField = new STextField("");

        labels[row] = new Label("Name");
        fields[row] = name;
        valids[row] = name.text.map(t =>
                new String(t).trim() === "" ? "<-- enter something" :
                new String(t).trim().indexOf(' ') < 0 ? "<-- must contain space" : "");


    }
}

FRP.main();