import { sectionStyle, sectionTitleStyle, sectionValueStyle } from './css/widget';
import { useWidgetItem } from '../../hooks/useWidgetItem';
import { ReactNode } from 'react';

type WidgetItemProps<T> = {
  label: string;
  value: T;
  valueElement: (value: T) => ReactNode;
};

const DEFAULT_DELAY = 500;

function WidgetItem<T>({ label, value, valueElement }: WidgetItemProps<T>) {
  const { value: currentValue } = useWidgetItem({ defaultValue: value, delay: DEFAULT_DELAY });

  return (
    <div css={sectionStyle}>
      <h3 css={sectionTitleStyle}>{label}</h3>
      <span css={sectionValueStyle}>{valueElement(currentValue)}</span>
    </div>
  );
}

export default WidgetItem;
