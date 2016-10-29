
class Num
{
    static tryParse(text) : boolean|number
    {
        const parsedInt: number = parseInt(text);
        return parsedInt !== parsedInt ? parsedInt : 0;
    }
}

export default Num;