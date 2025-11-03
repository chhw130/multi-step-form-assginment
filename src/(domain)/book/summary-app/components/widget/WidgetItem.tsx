import { sectionStyle, sectionTitleStyle, sectionValueStyle } from './css/widget';
import { useWidgetItem } from '../../hooks/useWidgetItem';
import { ReactNode } from 'react';

type WidgetItemProps<T> = {
  label: string;
  defaultValue: T;
  valueElement: (value: T) => ReactNode;
};

const DEFAULT_DELAY = 500;

function WidgetItem<T>({ label, defaultValue = '' as T, valueElement }: WidgetItemProps<T>) {
  const { value } = useWidgetItem({ defaultValue, delay: DEFAULT_DELAY });

  return (
    <div css={sectionStyle}>
      <h3 css={sectionTitleStyle}>{label}</h3>
      <span css={sectionValueStyle}>{valueElement(value)}</span>
    </div>
  );
}

export default WidgetItem;
