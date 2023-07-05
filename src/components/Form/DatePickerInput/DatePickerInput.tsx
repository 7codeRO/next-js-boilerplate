import Datepicker, { IOptions } from 'tailwind-datepicker-react';
import { useState } from 'react';
import { FieldMetaProps, useField } from 'formik';
import { FormField } from '../Form.types';
import { TextInput } from 'flowbite-react';
import styles from '/styles/inputs.module.scss';
import { useLocale } from 'src/hooks/useLocale';
import { CalendarEdit } from 'src/icons';

const useOptions = ({ initialValue }: FieldMetaProps<any>): IOptions => {
  const locale = useLocale();

  return {
    language: locale,
    defaultDate: initialValue || new Date()
  };
};

const DatePickerInput = ({ field }: { field: FormField }) => {
  const [fieldProps, meta, helpers] = useField(field.name);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(meta.initialValue || new Date());
  const options = useOptions(meta);

  const handleChange = (newValue: Date) => {
    setValue(newValue);
    helpers.setValue(newValue?.toISOString(), true);
  };

  return (
    <Datepicker options={options} onChange={handleChange} show={show} setShow={setShow}>
      <TextInput id={field.name} {...fieldProps} helperText={meta.touched && meta.error}
                 value={value.toLocaleDateString()} onClick={() => setShow(true)} readOnly icon={CalendarEdit}
                 className={`${styles.input} flex items-center font-bold`} style={{ cursor: 'pointer' }}
      />
    </Datepicker>
  );
};

export default DatePickerInput;
