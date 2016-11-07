import Monad from './Monad';

class Optional<T> implements Monad<T>
{
    protected value: T;

    constructor(x: T)
    {
        this.value = x;
    }
    
    private isNothing() : boolean
    {
        return (this.value === null || this.value === undefined || this.value !== this.value);
    }

    public static of<T>(x: T) : Optional<T>
    {
        return new Optional(x);
    }

    public empty() : None<T>
    {  
        return new None<T>(null);
    }

    public map(f: Function) : None<null> | Just<any>
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

    public flatMap(f: Function) : None<null> | any
    {
        return this.map(f).flatten();
    }

    public flatten() : None<null> | any
    {
        return this.isNone() ? None.of(null) : this.value;
    }
}

class None<T> extends Optional<T>
{
    constructor(x : T)
    {
        super(x);
    }

    public static of<T>(x: T) : None<T>
    {
        return new None(x);
    }

    public flatten() : None<null>
    {
        return new None<null>(null);
    }
}

class Just<T> extends Optional<T>
{
    constructor(x: T)
    {
        super(x);
    }

    public static of<T>(x: T) : Just<T>
    {
        return new Just(x);
    }

    public flatten() : T
    {
        return this.value;
    }
}

export default Optional;