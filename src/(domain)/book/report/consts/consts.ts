import { Quote, ReadingStatus } from '@/(domain)/book/share/consts/consts';

export const BOOK_PAGE = 365;

export const NUMBER_VALIDATION = /[^0-9]/g;

export type BookReportForm = {
  readingStatus: ReadingStatus;
  startDate: string;
  endDate: string;
  starRating: number;
  bookReport: string;
  quoteInfo: Quote[];
  disclosure: boolean;
};
