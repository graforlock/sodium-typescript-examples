interface Monad<T>
{
    flatten();
    map(f: Function|T);
    flatMap(f: Function|T) : Monad<T> | T;
}

export default Monad;