import styles from './RadioButtonInput.module.scss';
import { RadioButtonInputProps } from './RadioButtonInput.types';
import clsx from 'clsx';

const RadioButtonInput = ({ active, title, onSelect }: RadioButtonInputProps) => (
  <div className={styles.container} onClick={onSelect}>
    <h6 className={clsx('font-bold', active ? 'text-primary-main' : 'text-primary-disabled')}>{title}</h6>
    <input className={styles.container__radio} checked={active} name='radio' type='radio' onChange={onSelect} />
  </div>
);

export default RadioButtonInput;
