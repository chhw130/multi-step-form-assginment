import { BookReportForm } from '@/pages';
import {
  widgetContainerStyle,
  sectionStyle,
  sectionTitleStyle,
  sectionValueStyle,
  quoteListStyle,
  quoteItemStyle,
  pageBadgeStyle,
} from './css/widget';
import WidgetItem from './WidgetItem';

type FormStateWidgetProps = {
  state: BookReportForm;
};

/**report관련 Widget이라 도메인을 옮겨야함. */
const SummaryWidget = ({ state }: FormStateWidgetProps) => {
  const { readingStatus, startDate, endDate, starRating, bookReport, quoteInfo, disclosure } =
    state;

  return (
    <div css={widgetContainerStyle}>
      <WidgetItem label="독서 상태" defaultValue={readingStatus} />
      <div css={sectionStyle}>
        <h3 css={sectionTitleStyle}>독서 기간</h3>
        <p css={sectionValueStyle}>
          {startDate} ~ {endDate}
        </p>
      </div>
      <div css={sectionStyle}>
        <h3 css={sectionTitleStyle}>독서 추천</h3>
        <p css={sectionValueStyle}>{starRating}점</p>
      </div>
      <div css={sectionStyle}>
        <h3 css={sectionTitleStyle}>독후감</h3>
        <p css={sectionValueStyle}>{bookReport}</p>
      </div>
      <div css={sectionStyle}>
        <h3 css={sectionTitleStyle}>인용구</h3>
        <div css={quoteListStyle}>
          {quoteInfo.map((quote) => (
            <div css={quoteItemStyle} key={`${quote.quote}-${quote.page}`}>
              <span>{quote.quote}</span>
              <span css={pageBadgeStyle}>{quote.page}p</span>
            </div>
          ))}
        </div>
      </div>
      <div css={sectionStyle}>
        <h3 css={sectionTitleStyle}>공개 여부</h3>
        <p css={sectionValueStyle}>{disclosure ? '공개' : '비공개'}</p>
      </div>
    </div>
  );
};

export default SummaryWidget;
