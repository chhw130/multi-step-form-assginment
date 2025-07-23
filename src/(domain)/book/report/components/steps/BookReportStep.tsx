import { BookReportForm } from '@/pages';
import {
  containerStyle,
  errorStyle,
  labelStyle,
  subtitleStyle,
  titleStyle,
  textareaStyle,
  reportContainerStyle,
  reportLengthStyle,
} from './css/step';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const generateBookReportSchema = (starRating: BookReportForm['starRating']) => {
  const isMustReport = starRating === 1 || starRating === 5;

  return {
    bookReport: {
      required: isMustReport ? '독후감을 작성해주세요.' : false,
      disabled: !isMustReport,
      minLength: {
        value: 100,
        message: '최소 100자 이상 작성해주세요.',
      },
    },
  };
};

const BookReportStep = () => {
  const {
    register,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<BookReportForm>();

  const starRating = getValues('starRating');
  const bookReportSchema = generateBookReportSchema(starRating);

  useEffect(() => {
    const isMustReport = starRating === 1 || starRating === 5;

    if (!isMustReport) {
      setValue('bookReport', '');
    }
  }, [starRating, setValue]);

  const bookReportValue = watch('bookReport');
  const bookReportLength = bookReportValue?.length ?? 0;

  return (
    <article css={containerStyle}>
      <h2 css={titleStyle}>독후감</h2>
      <p css={subtitleStyle}>
        독후감을 작성해주세요.
        <br />
        (별점이 1점 또는 5점인 경우에만 작성하실 수 있어요.)
      </p>

      <label css={labelStyle} htmlFor="bookReport">
        독후감 작성
      </label>

      <textarea
        css={textareaStyle}
        id="bookReport"
        {...register('bookReport', bookReportSchema.bookReport)}
      />
      <div css={reportContainerStyle}>
        {errors.bookReport && <p css={errorStyle}>{errors.bookReport.message}</p>}
        <p css={reportLengthStyle}>글자수 : {bookReportLength}</p>
      </div>
    </article>
  );
};

export default BookReportStep;
