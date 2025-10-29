import { debounce } from '@/util/util';
import { useEffect, useState } from 'react';

type UseWidgetItemProps<T> = {
  defaultValue: T;
  delay?: number;
};

export const useWidgetItem = <T>({ defaultValue, delay = 500 }: UseWidgetItemProps<T>) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const debounced = debounce(() => setValue(defaultValue as T), delay);
    debounced();
  }, [defaultValue, delay]);

  return { value };
};
