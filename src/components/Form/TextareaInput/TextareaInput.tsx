import { Textarea } from 'flowbite-react';
import { useField } from 'formik';

import { TextareaInputProps } from './TextareaInput.types';

import { RenderIf } from '../../RenderIf/RenderIf';
import { styles } from './TextareaInput.styles';
import { buildStyles } from '../Common/BuildStyles';

const TextareaInput = ({ field }: TextareaInputProps) => {
  const [fieldProps, meta, helpers] = useField(field.name);
  let disabled = false;

  if (field.enableIfField) {
    const [relatedField] = useField({
      name: field.enableIfField.fieldName
    });

    disabled = relatedField.value !== field.enableIfField.value;

    if (disabled && fieldProps.value) setTimeout(() => helpers.setValue(''));
  }

  const hasErrors = meta.touched && !!meta.error;

  return (
    <div className="group">
      <RenderIf condition={!!field.label}>
        <p className={buildStyles(hasErrors, styles.label)}>
          {field.label}
        </p>
      </RenderIf>
      <Textarea
        {...fieldProps}
        id={field.name}
        disabled={disabled}
        className={buildStyles(hasErrors, styles.inputTextArea)}
        rows={5}
        color={hasErrors ? 'failure' : 'gray'}
        helperText={meta.touched && meta.error}
      />
    </div>
  );
};

export default TextareaInput;
