import { ChangeEvent, InputHTMLAttributes, useMemo, useState } from 'react';

type CommaSeparateInputProps = {
  valueNumber?: number;
} & InputHTMLAttributes<HTMLInputElement>;

const CommaSeparateInput = ({ ...props }: CommaSeparateInputProps) => {
  const [value, setValue] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setValue(numericValue);
  };

  const commaValue = useMemo(() => {
    if (!value) return '';

    return Number(value).toLocaleString();
  }, [value]);

  return <input onChange={onChangeInput} value={commaValue} {...props} />;
};

export default CommaSeparateInput;
