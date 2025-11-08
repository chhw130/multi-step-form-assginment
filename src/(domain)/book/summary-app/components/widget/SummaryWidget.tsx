import { widgetContainerStyle } from './css/widget';
import WidgetItem from './WidgetItem';
import {
  generateReadingPeriod,
  generateReadingStatus,
  generateStarRating,
  generateQuote,
} from '@/(domain)/book/summary-app/util/widget';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { BookReportForm } from '@/(domain)/book/report/consts/consts';

/**report관련 Widget이라 도메인을 옮겨야함. */
const SummaryWidget = () => {
  const form = useFormContext<BookReportForm>();
  const { readingStatus, startDate, endDate, starRating, bookReport, quoteInfo, disclosure } =
    form.getValues();

  const readingStatusText = generateReadingStatus(readingStatus);
  const readingPeriod = generateReadingPeriod(startDate, endDate);
  const starRatingText = generateStarRating(starRating);
  const quoteInfoText = useMemo(() => generateQuote(quoteInfo), [quoteInfo]);

  return (
    <div css={widgetContainerStyle}>
      <WidgetItem label="독서 상태" value={readingStatusText} />
      <WidgetItem label="독서 기간" value={readingPeriod} />
      <WidgetItem label="독서 추천" value={starRatingText} />
      <WidgetItem label="독후감" value={bookReport} valueElement={(value) => <p>{value}</p>} />
      <WidgetItem
        label="인용구"
        value={quoteInfoText}
        valueElement={(value) => (
          <ul>
            {value.map((quote) => (
              <li key={quote.quote}>
                <p>{quote.quote}</p>
                <p>페이지 번호 : {quote.page}</p>
              </li>
            ))}
          </ul>
        )}
      />
      <WidgetItem label="공개 여부" value={disclosure} />
    </div>
  );
};

export default SummaryWidget;
