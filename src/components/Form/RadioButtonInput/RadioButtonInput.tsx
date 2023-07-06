import { RadioButtonInputProps } from './RadioButtonInput.types';
import clsx from 'clsx';

const RadioButtonInput = ({ active, title, onSelect }: RadioButtonInputProps) => (
  <div className="flex items-center justify-center h-[60px] shadow-sm" onClick={onSelect}>
    <h6 className={clsx('font-bold', active ? 'text-primary-main' : 'text-primary-disabled')}>{title}</h6>
    <input className="ml-auto mr-6" checked={active} name='radio' type='radio' onChange={onSelect} />
  </div>
);

export default RadioButtonInput;
