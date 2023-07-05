import { useField } from 'formik';
import { Checkbox, Label } from 'flowbite-react';
import { useState } from 'react';

import { FormField, FormFieldOption } from '../Form.types';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = ({ field }: { field: FormField }) => {
  const [_, meta, helpers] = useField(field.name);
  const [value, setValue] = useState(meta.initialValue);

  const isChecked: boolean[] = Object.values(value);

  return (
    <div role='group'>
      {field.options?.map((option: FormFieldOption, optionIndex: number) => {
        return (
          <div key={optionIndex} className={'flex items-center space-x-3'}>
            <Checkbox className={styles.label} name={`${field.name}-${optionIndex}`}
                      checked={isChecked[optionIndex] || false}
                      onChange={(event) => {
                        const newValue = { ...value };
                        newValue[option.identifier!] = event.target.checked;

                        setValue(newValue);
                        helpers.setValue(newValue);
                      }}
            />
            <Label className={styles.label}>{option.label}</Label>
          </div>

        );
      })}
    </div>
  );
};

export default CheckboxInput;
