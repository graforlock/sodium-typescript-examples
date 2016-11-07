import Sale from './Sale';

enum Type {
    IDLE,
    FILLING,
    SALE_COMPLETE
}

class FillState 
{
    constructor(
        public readonly mode: Type, 
        public readonly sale: Sale = null) {}
}

