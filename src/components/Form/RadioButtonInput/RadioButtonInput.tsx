import styles from './RadioButtonInput.module.scss';
import { RadioButtonInputProps } from './RadioButtonInput.types';

const blue = '#512AD8'
const gray = '#8E8D8D'

const RadioButtonInput = ({ active, title, onSelect }: RadioButtonInputProps) => {
  const color = active ? blue : gray

  return (
    <div className={styles.container} onClick={onSelect}>
      <h6 className={`font-bold text-${color}`}>{title}</h6>
      <input className={styles.container__radio} checked={active} name="radio" type="radio" onChange={onSelect} />
    </div>
  );
};

export default RadioButtonInput;
