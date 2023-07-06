import { ChangeEvent, useState } from 'react';
import { useField } from 'formik';
import { FormField } from '../Form.types';
import dayjs from 'dayjs';
import { RenderIf } from '../../RenderIf/RenderIf';
import { buildStyles } from '../Common/BuildStyles';
import { styles } from './TimePickerInput.styles';

const dateFromEvent = (event: ChangeEvent<HTMLInputElement>) => {
  const [hour, minutes] = event.target.value.split(':').map(Number);
  if (hour === undefined || minutes === undefined) {
    return null
  }

  const date = new Date();
  date.setHours(hour);
  date.setMinutes(minutes);

  return date;
};

const TimePickerInput = ({ field }: { field: FormField }) => {
  const [fieldProps, meta, helpers] = useField(field.name);
  const [value, setValue] = useState(meta.initialValue || new Date());

  const displayValue = dayjs(value).format('HH:mm');
  const hasErrors = meta.touched && !!meta.error;

  return <div className='group'>
    <RenderIf condition={!!field.label}>
      <span className={buildStyles(hasErrors, styles.label)}>{field.label}</span>
    </RenderIf>
    <input
      {...fieldProps}
      type='time'
      value={displayValue}
      onChange={(event) => {
        const date = dateFromEvent(event);

        setValue(date);
        helpers.setValue(date?.toISOString(), true);
      }}
      className={buildStyles(hasErrors, styles.input)}
    />
    <RenderIf condition={hasErrors}>
      <p className="text-xs text-red-600 ml-3">
        {meta.error}
      </p>
    </RenderIf>
  </div>;
};

export default TimePickerInput;
