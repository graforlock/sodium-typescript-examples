import Fuel from './Fuel';

class Sale
{
    constructor(
        public readonly fuel: Fuel, 
        public readonly price: number, 
        public readonly cost: number, 
        public readonly quantity: number) {
    }
}

export default Sale;

