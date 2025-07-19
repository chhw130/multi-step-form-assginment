import { generatePeriodDisabled } from '../../utils/step';
import { READING_STATUS } from '../../consts/consts';
import { Controller, useFormContext } from 'react-hook-form';
import { BookReportForm } from '@/pages';

const generateBasicInfoSchema = (formValues: BookReportForm) => {
  const [startDateDisabled, endDateDisabled] = generatePeriodDisabled(formValues.readingStatus);

  const validatePeriod = (startDate: string, endDate: string) => {
    if (new Date(startDate) >= new Date(endDate))
      return '날짜를 올바르게 입력해주세요. (시작일은 종료일보다 늦을 수 없습니다)';
  };

  return {
    readingStatus: { required: '독서 상태를 선택해주세요.' },
    startDate: {
      required: startDateDisabled ? false : '시작일을 선택해주세요.',
      disabled: startDateDisabled,
      validate: {
        validatePeriod: (value: string) => validatePeriod(value, formValues.endDate),
      },
    },
    endDate: {
      required: endDateDisabled ? false : '종료일을 선택해주세요.',
      disabled: endDateDisabled,
      validate: {
        validatePeriod: (value: string) => validatePeriod(formValues.startDate, value),
      },
    },
  };
};

const ReportBasicStep = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
    setValue,
    getValues,
    clearErrors,
  } = useFormContext<BookReportForm>();

  watch();
  const basicInfoSchema = generateBasicInfoSchema(getValues());

  const dateError = errors.startDate?.message || errors.endDate?.message;

  return (
    <article>
      <h1>도서 기본 정보</h1>
      <label htmlFor="reading-status">독서 상태</label>
      <Controller
        name="readingStatus"
        control={control}
        render={({ field }) => (
          <select
            id="reading-status"
            {...field}
            onChange={(e) => {
              field.onChange(e.target.value);
              setValue('startDate', '');
              setValue('endDate', '');
              clearErrors();
            }}
          >
            <option value="">독서 상태를 선택해주세요.</option>
            {READING_STATUS.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        )}
      />
      <p>{errors.readingStatus?.message}</p>

      <h2>독서 기간</h2>
      <label htmlFor="start-date">
        시작일
        <input
          id="start-date"
          type="date"
          disabled={basicInfoSchema.startDate.disabled}
          {...register('startDate', basicInfoSchema.startDate)}
        />
      </label>
      <label htmlFor="end-date">
        종료일
        <input
          id="end-date"
          type="date"
          disabled={basicInfoSchema.endDate.disabled}
          {...register('endDate', basicInfoSchema.endDate)}
        />
      </label>
      {dateError && <p>{dateError}</p>}
    </article>
  );
};

export default ReportBasicStep;
