import { BookReportForm, Quote } from '@/pages';
import { widgetContainerStyle } from './css/widget';
import WidgetItem from './WidgetItem';
import { generateReadingPeriod } from '../../util/period';

type FormStateWidgetProps = {
  state: BookReportForm;
};

/**report관련 Widget이라 도메인을 옮겨야함. */
const SummaryWidget = ({ state }: FormStateWidgetProps) => {
  const { readingStatus, startDate, endDate, starRating, bookReport, quoteInfo, disclosure } =
    state;

  const readingPeriod = generateReadingPeriod(startDate, endDate);

  return (
    <div css={widgetContainerStyle}>
      <WidgetItem
        label="독서 상태"
        value={readingStatus}
        valueElement={(value) => <span>{value}</span>}
      />
      <WidgetItem
        label="독서 기간"
        value={readingPeriod}
        valueElement={(value) => <span>{value}</span>}
      />
      <WidgetItem
        label="독서 추천"
        value={starRating}
        valueElement={(value) => <span>{value}점</span>}
      />
      <WidgetItem
        label="독후감"
        value={bookReport}
        valueElement={(value) => <span>{value}</span>}
      />
      <WidgetItem
        label="인용구"
        value={quoteInfo}
        valueElement={(value) => (
          <span>
            {value.map((quote: Quote) => (
              <span key={quote.quote}>{quote.quote}</span>
            ))}
          </span>
        )}
      />
      <WidgetItem
        label="공개 여부"
        value={disclosure}
        valueElement={(value) => <span>{value}</span>}
      />
    </div>
  );
};

export default SummaryWidget;
