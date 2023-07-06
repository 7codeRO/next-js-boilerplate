import { TextInputTypes } from './TextInput.types';
import { useField } from 'formik';
import { RenderIf } from '../../RenderIf/RenderIf';
import { styles } from './TextInput.styles';
import { buildStyles } from '../Common/BuildStyles';

const TextInput = (props: TextInputTypes) => {
  const [field, meta] = useField(props);
  const hasErrors = meta.touched && !!meta.error;

  return (
    <div className="group">
      <RenderIf condition={!!props.label}>
        <p className={buildStyles(hasErrors, styles.label)}>
          {props.label}
        </p>
      </RenderIf>
      <input {...field} className={buildStyles(hasErrors, styles.input)} />
      <RenderIf condition={hasErrors}>
        <p className="text-xs text-red-600 ml-3">
          {meta.error}
        </p>
      </RenderIf>
    </div>
  );
};

export default TextInput;
