export type Quote = {
  quote: string;
  page: number;
};

export const READING_STATUS = {
  reading: '읽는 중',
  finished: '읽음',
  want: '읽고 싶은 책',
  stop: '보류 중',
} as const;

export type ReadingStatus = keyof typeof READING_STATUS;
export type ReadingStatusValue = (typeof READING_STATUS)[ReadingStatus];
