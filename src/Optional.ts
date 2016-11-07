class Optional
{
    protected value: any;

    constructor(x)
    {
        this.value = x;
    }
    
    private isNothing() : boolean
    {
        return (this.value === null || this.value === undefined || this.value !== this.value);
    }

    public static of(x) : Optional
    {
        return new Optional(x);
    }

    public map(f: Function) : None | Just
    {
        return this.isNothing() ? None.of(null) : Just.of(f(this.value));
    }   

    public isNone() : boolean
    {
        return this.constructor === None;
    }

    public isJust() : boolean
    {
        return this.constructor === Just;
    }

    public flatten() : None | any
    {
        return this.isNone() ? None.of(null) : this.value;
    }

    public flatMap(f: Function) : None | any
    {
        return this.map(f).flatten();
    }
}

class None extends Optional
{
    constructor(x)
    {
        super(x);
    }

    public static of(x) : None
    {
        return new None(x);
    }

    public flatten() : any
    {
        return this.value;
    }
}

class Just extends Optional
{
    constructor(x)
    {
        super(x);
    }

    public static of(x) : Just
    {
        return new Just(x);
    }
}

export default Optional;