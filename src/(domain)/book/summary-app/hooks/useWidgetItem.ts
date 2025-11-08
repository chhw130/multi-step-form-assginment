import { debounce } from '@/util/util';
import { useEffect, useState } from 'react';

type UseWidgetItemProps<T> = {
  defaultValue: T;
  delay?: number;
};

export const useWidgetItem = <T>({ defaultValue, delay = 1000 }: UseWidgetItemProps<T>) => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const debounced = debounce(() => setValue(defaultValue as T), delay);
    const { cancel } = debounced();

    return () => {
      cancel();
    };
  }, [defaultValue, delay]);

  return { value };
};
