import { sectionStyle, sectionTitleStyle, sectionValueStyle } from './css/widget';
import { useWidgetItem } from '../../hooks/useWidgetItem';

type WidgetItemProps<T> = {
  label: string;
  defaultValue: T;
};

const DEFAULT_DELAY = 500;

function WidgetItem<T>({ label, defaultValue }: WidgetItemProps<T>) {
  const { value } = useWidgetItem({ defaultValue, delay: DEFAULT_DELAY });

  return (
    <div css={sectionStyle}>
      <h3 css={sectionTitleStyle}>{label}</h3>
      <span css={sectionValueStyle}>{value?.toString() ?? '-'}</span>
    </div>
  );
}

export default WidgetItem;
