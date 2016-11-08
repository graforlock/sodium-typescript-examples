import Arr from './Arr';

import Component from './Component';

import STextField from './STextField';
import SSpinner from './SSpinner';
import Label from './Label';
import SLabel from './SLabel';
import SButton from './SButton';

import {Transaction, Cell} from 'sodiumjs';

class FRP
{
    public static readonly maxEmails: number = 4;

    public static main()
    {
        Transaction.run(() =>
        {
            const labels: Array<Label> = new Array<Label>(FRP.maxEmails + 2);
            const fields: Array<Component> = new Array<Component>(FRP.maxEmails + 2);

            const valids: Array<Cell<string>> = Arr.newInstance<Cell<string>>(new Cell<string>(""), FRP.maxEmails + 2);

            var row: number = 0;

            const name: STextField = new STextField("");

            labels[row] = new Label("Name");
            fields[row] = name;
            valids[row] = name.text.map(t =>
                new String(t).trim() === "" ? "<-- enter something" :
                    new String(t).trim().indexOf(' ') < 0 ? "<-- must contain space" : "");

            row++;

            labels[row] = new Label("No of email addresses");
            const num: SSpinner = new SSpinner(1);
            fields[row] = num;
            valids[row] = num.value
                .map(n => n < 1 || n > FRP.maxEmails ? "<-- must be 1 to " + FRP.maxEmails : "");

            row++;

            const emails: Array<STextField> = new Array<STextField>(FRP.maxEmails);
            for (let i = 0; i < FRP.maxEmails; i++, row++)
            {
                labels[row] = new Label(`Email # ${i + 1}`);
                const ii: number = i;
                const enabled: Cell<Boolean> = num.value.map(n => ii < n);
                const email: STextField = new STextField("", /*, enabled */);
                fields[row] = email;
                valids[row] = email.text.lift(num.value, (e, n) =>
                        ii >= n ? "" : new String(e).trim() === "" ? "<-- enter something" :
                        e.indexOf('@') < 0 ? "<-- must contain @" : "");
            }

            let allValid: Cell<boolean>  = new Cell<boolean>(true);

            for (let i = 0; i < row; i++) {

                let validLabel: SLabel = new SLabel(valids[i]);
                let thisValid: Cell<boolean> = valids[i].map(t => t === "");
                thisValid = allValid = allValid.lift(thisValid, (a, b) => a && b);

            }

            const ok: SButton  = new SButton("OK", allValid);
        });
    }
}

FRP.main();