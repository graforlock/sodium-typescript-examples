import Inputs from './Inputs';
import Outputs from './Outputs';

interface Pump
{
    create(inputs: Inputs): Outputs;
}