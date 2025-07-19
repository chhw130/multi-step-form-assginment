import { ReadingStatus } from '../consts/consts';

/**
 * 독서 기간 비활성화 여부 생성
 * @param readingStatus 독서 상태
 * @returns [시작일 비활성화 여부, 종료일 비활성화 여부]
 */
export const generatePeriodDisabled = (readingStatus: ReadingStatus): [boolean, boolean] => {
  if (!readingStatus) return [true, true];

  switch (readingStatus) {
    case 'want':
      return [true, true];
    case 'reading':
      return [false, true];
    case 'finished':
      return [false, false];
    case 'stop':
      return [false, true];
  }
};
