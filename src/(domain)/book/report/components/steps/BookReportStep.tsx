import { BookReportForm } from '@/pages';
import {
  containerStyle,
  errorStyle,
  labelStyle,
  subtitleStyle,
  titleStyle,
  textareaStyle,
} from '../css/step';
import { useFormContext } from 'react-hook-form';

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
    formState: { errors },
  } = useFormContext<BookReportForm>();

  const starRating = watch('starRating');
  const bookReportSchema = generateBookReportSchema(starRating);

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
      {errors.bookReport && <p css={errorStyle}>{errors.bookReport.message}</p>}
    </article>
  );
};

export default BookReportStep;
