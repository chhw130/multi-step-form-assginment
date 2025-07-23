import StarRating from '@/components/StarRating';
import { BookReportForm } from '@/pages';
import { Controller, useFormContext } from 'react-hook-form';
import { containerStyle, titleStyle, subtitleStyle, labelStyle } from './css/step';

const StarRatingStep = () => {
  const { control } = useFormContext<BookReportForm>();

  return (
    <article css={containerStyle}>
      <h2 css={titleStyle}>독서 추천</h2>
      <p css={subtitleStyle}>별점을 선택해주세요.</p>

      <label css={labelStyle} htmlFor="star-rating">
        별점
      </label>
      <Controller
        name="starRating"
        control={control}
        render={({ field }) => (
          <StarRating
            rating={field.value}
            size="large"
            onChange={(value: number) => {
              field.onChange(value);
            }}
          />
        )}
      />
    </article>
  );
};

export default StarRatingStep;
