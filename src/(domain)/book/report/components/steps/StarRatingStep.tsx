import StarRating from '@/components/StarRating';
import { Controller, useFormContext } from 'react-hook-form';
import { containerStyle, titleStyle, subtitleStyle, labelStyle } from './css/step';
import { BookReportForm } from '@/(domain)/book/report/consts/consts';

const StarRatingStep = () => {
  const { control } = useFormContext<BookReportForm>();
  //별점 상태를 즉각적으로 widget에 반영하려면 리렌더링 혹은 제어 컴포넌트 느낌으로 써야할 거 같음.
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
