class Arr
{
    public static newInstance<T>(component: T, dimensions: number): Array<T>
    {
        let tempArray: Array<T> = new Array<T>();

        for(let i = 0; i < dimensions; i++)
        {
            tempArray.push(component);
        }

        return tempArray;
    }
}

export default Arr;