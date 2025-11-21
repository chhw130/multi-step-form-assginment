import { ChangeEvent, forwardRef, InputHTMLAttributes, useMemo, useState } from 'react';

export type CommaSeparateInputProps = {
  valueNumber?: number;
  handleChangeNumber?: (value: number) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const CommaSeparateInput = forwardRef<HTMLInputElement, CommaSeparateInputProps>(
  ({ valueNumber, handleChangeNumber, ...props }, ref) => {
    const [value, setValue] = useState<string>(valueNumber?.toString() ?? '');

    const commaValue = useMemo(() => {
      if (!value) return '';

      return Number(value).toLocaleString();
    }, [value]);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const numericValue = e.target.value.replace(/[^0-9]/g, '');

      setValue(numericValue);

      handleChangeNumber?.(Number(numericValue));
    };

    return <input ref={ref} onChange={onChangeInput} value={commaValue} {...props} />;
  }
);

CommaSeparateInput.displayName = 'CommaSeparateInput';

export default CommaSeparateInput;
