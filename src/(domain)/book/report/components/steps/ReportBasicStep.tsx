import { generatePeriodDisabled } from '../../utils/step';
import { READING_STATUS } from '../../consts/consts';
import { useFormContext } from 'react-hook-form';
import { BookReportForm } from '@/pages';
import {
  containerStyle,
  titleStyle,
  subtitleStyle,
  selectStyle,
  inputStyle,
  errorStyle,
  dateGroupStyle,
  labelStyle,
} from '../css/step';

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
    formState: { errors },
    setValue,
    getValues,
    clearErrors,
  } = useFormContext<BookReportForm>();

  watch();
  const basicInfoSchema = generateBasicInfoSchema(getValues());
  const { onChange: onChangeReadingStatus, ...rest } = register(
    'readingStatus',
    basicInfoSchema.readingStatus
  );

  const dateError = errors.startDate?.message || errors.endDate?.message;

  return (
    <article css={containerStyle}>
      <h1 css={titleStyle}>도서 기본 정보</h1>

      <div>
        <label htmlFor="reading-status" css={subtitleStyle}>
          독서 상태
        </label>
        <select
          id="reading-status"
          {...rest}
          css={selectStyle}
          onChange={(e) => {
            onChangeReadingStatus(e);
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
        {errors.readingStatus?.message && <p css={errorStyle}>{errors.readingStatus.message}</p>}
      </div>

      <p css={subtitleStyle}>독서 기간</p>
      <div css={dateGroupStyle}>
        <div>
          <label htmlFor="start-date" css={labelStyle}>
            시작일
          </label>
          <input
            id="start-date"
            type="date"
            disabled={basicInfoSchema.startDate.disabled}
            {...register('startDate', basicInfoSchema.startDate)}
            css={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="end-date" css={labelStyle}>
            종료일
          </label>
          <input
            id="end-date"
            type="date"
            disabled={basicInfoSchema.endDate.disabled}
            {...register('endDate', basicInfoSchema.endDate)}
            css={inputStyle}
          />
        </div>
      </div>

      {dateError && <p css={errorStyle}>{dateError}</p>}
    </article>
  );
};

export default ReportBasicStep;
