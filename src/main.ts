import Arr from './Arr';

import STextField from './stext-field';
import SSpinner from './sspinner';
import Label from './label';

import {transactionally, Cell} from 'sodiumjs';

class FRP
{
    public static readonly maxEmails: number = 4;

    public static main()
    {
        const labels: Array<Label> = new Array<Label>(FRP.maxEmails + 2);
        const fields: Array<STextField> = new Array<STextField>(FRP.maxEmails + 2);

        const valids: Array<Cell<string>> = Arr.newInstance<Cell<string>>(new Cell<string>(""), FRP.maxEmails + 2);

        var row: number = 0;

        const name: STextField = new STextField("");

        labels[row] = new Label("Name");
        fields[row] = name;
        valids[row] = name.text.map(t =>
                new String(t).trim() === "" ? "<-- enter something" :
                new String(t).trim().indexOf(' ') < 0 ? "<-- must contain space" : "");

        row += 1;
        /*
        const emails: Array<STextField> =  new Array<STextField>(FRP.maxEmails);
        for(let i = 0; i < FRP.maxEmails; i++, row++)
        {
            labels[row] = new Label(`Email # ${i + 1}`);
            const ii: number = i;
            const email: STextField = new STextField("");
            fields[row] = email;
            valids[row] = email.text.lift(2,)
        }
        */
    }
}

FRP.main();