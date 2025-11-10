import {
  Quote,
  READING_STATUS,
  ReadingStatus,
  ReadingStatusValue,
} from '@/(domain)/book/share/consts/consts';

/**
 * 독서 상태 생성
 * @param readingStatus 독서 상태
 * @returns 독서 상태
 */
export const generateReadingStatus = (readingStatus: ReadingStatus): ReadingStatusValue | '' => {
  if (!readingStatus) {
    return '';
  }

  return READING_STATUS[readingStatus];
};

/**
 * 독서 기간 생성
 * 기간이 없을 경우 빈 문자열 반환
 * 종료일이 없을 경우 시작일 ~ 반환
 * 시작일과 종료일이 모두 있을 경우 시작일 ~ 종료일 반환
 * @param startDate 시작일
 * @param endDate 종료일
 * @returns 독서 기간
 */
export const generateReadingPeriod = (startDate: string, endDate: string) => {
  if (!startDate && !endDate) {
    return '';
  }

  if (!endDate) {
    return `${startDate} ~`;
  }

  return startDate && endDate ? `${startDate} ~ ${endDate}` : '';
};

/**
 * 별점 생성
 * @param starRating 별점
 * @returns 별점 문자열
 */
export const generateStarRating = (starRating: number) => {
  if (starRating == null) {
    return '';
  }
  return `${starRating}점`;
};

export const generateQuote = (quoteInfo: Quote[]) => {
  return quoteInfo.filter((quote) => quote.page > 0);
};
