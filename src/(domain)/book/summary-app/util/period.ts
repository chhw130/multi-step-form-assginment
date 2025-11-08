export const generateReadingPeriod = (startDate: string, endDate: string) => {
  if (!startDate && !endDate) {
    return '';
  }

  if (!endDate) {
    return `${startDate} ~`;
  }

  return startDate && endDate ? `${startDate} ~ ${endDate}` : '';
};
