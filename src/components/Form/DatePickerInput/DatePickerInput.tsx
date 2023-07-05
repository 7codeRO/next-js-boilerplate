import Datepicker from 'tailwind-datepicker-react';
import { useState } from 'react';
import { FieldMetaProps, useField } from 'formik';
import { FormField } from '../Form.types';
import { TextInput } from 'flowbite-react';
import styles from '/styles/inputs.module.scss';

const getUserLocale = () => navigator.languages && navigator.languages.length
  ? navigator.languages[0]
  : navigator.language;

const optionsForMeta = ({ initialValue }: FieldMetaProps<any>) => ({
  language: getUserLocale() || 'en-US',
  defaultDate: initialValue || new Date()
});

const DatePickerInput = ({ field }: { field: FormField }) => {
  const [show, setShow] = useState(false);
  const [fieldProps, meta, helpers] = useField(field.name);

  const handleChange = (newValue: Date) => {
    helpers.setValue(newValue?.toISOString(), true);
  };

  return (
    <Datepicker options={optionsForMeta(meta)} onChange={handleChange} show={show} setShow={setShow}>
      <TextInput id={field.name} {...fieldProps} className={styles.input}
                 helperText={meta.touched && meta.error} />
    </Datepicker>
  );
};

export default DatePickerInput;
