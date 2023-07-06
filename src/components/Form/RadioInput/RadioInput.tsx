import { FormField } from '../Form.types';
import { useField } from 'formik';
import { Radio, Label } from 'flowbite-react';
import { RenderIf } from 'src/components/RenderIf/RenderIf';

const RadioInput = ({ field }: { field: FormField }) => {
  const [_, meta, helpers] = useField(field.name);

  return (
    <fieldset
      className="flex max-w-md flex-col gap-4"
      name={field.name}
    >
      <RenderIf condition={!!field.label}>
        <legend className="mb-4">
          {field.label}
        </legend>
      </RenderIf>
      {field.options?.map((option, index) => <div className="flex items-center gap-2"
                                                  key={`${field.name}-option-${index}`}>
        <Radio
          id={`${field.name}-option-${index}`}
          name={field.name}
          checked={option.value === meta.value}
          value={`${option.value}`}
          onChange={event => {
            helpers.setValue(event.target.value);
          }}
        />
        <Label htmlFor={`${field.name}-option-${index}`}>
          {option.label}
        </Label>
      </div>)}
    </fieldset>
  );
};

export default RadioInput;
