import { Label, Textarea } from 'flowbite-react';
import { useField } from 'formik';

import { TextareaInputProps } from './TextareaInput.types';

import styles from '/styles/inputs.module.scss';
import clsx from 'clsx';

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

  const hasErrors = meta.touched && !!meta.error

  return (
    <>
      <div className='mb-2 block'>
        <Label
          htmlFor={field.name}
          value={field.label}
        />
      </div>
      <Textarea
        {...fieldProps}
        id={field.name}
        disabled={disabled}
        className={clsx(styles.inputTextArea, hasErrors && "border-2 border-red-600")}
        rows={5}
        color={hasErrors ? 'failure' : 'gray'}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default TextareaInput;
