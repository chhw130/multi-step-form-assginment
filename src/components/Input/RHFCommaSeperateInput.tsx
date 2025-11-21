import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import CommaSeparateInput, { CommaSeparateInputProps } from './CommaSeparateInput';

type RHFCommaSeperateInputProps<T extends FieldValues> = UseControllerProps<T> &
  CommaSeparateInputProps;

const RHFCommaSeperateInput = <T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: RHFCommaSeperateInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({ name, control, rules });

  return (
    <CommaSeparateInput
      {...props}
      handleChangeNumber={onChange}
      onBlur={onBlur}
      name={name}
      valueNumber={value}
      ref={ref}
    />
  );
};

export default RHFCommaSeperateInput;
