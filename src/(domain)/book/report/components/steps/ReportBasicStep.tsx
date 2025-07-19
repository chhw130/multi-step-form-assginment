import { css } from '@emotion/react';
import { generatePeriodDisabled } from '../../utils/step';
import { READING_STATUS } from '../../consts/consts';
import { useFormContext } from 'react-hook-form';
import { BookReportForm } from '@/pages';

const containerStyle = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const titleStyle = css`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const labelStyle = css`
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const selectStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const inputStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    background: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

const errorStyle = css`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const subtitleStyle = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a5568;
  margin: 2rem 0 1rem 0;
`;

const dateGroupStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

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
