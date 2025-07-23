export const READING_STATUS = [
  { label: '읽는 중', value: 'reading' },
  { label: '읽음', value: 'finished' },
  { label: '읽고 싶은 책', value: 'want' },
  { label: '보류 중', value: 'stop' },
] as const;

export type ReadingStatus = (typeof READING_STATUS)[number]['value'];

export const BOOK_PAGE = 365;

export const NUMBER_VALIDATION = /[^0-9]/g;
