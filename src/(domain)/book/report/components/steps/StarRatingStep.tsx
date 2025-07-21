import StarRating from '@/components/StarRating';
import { BookReportForm } from '@/pages';
import { Controller, useFormContext } from 'react-hook-form';

const StarRatingStep = () => {
  const { control } = useFormContext<BookReportForm>();

  return (
    <div>
      <label htmlFor="star-rating">별점</label>
      <Controller
        name="starRating"
        control={control}
        render={({ field }) => (
          <StarRating
            rating={field.value}
            onChange={(value: number) => {
              field.onChange(value);
            }}
          />
        )}
      />
    </div>
  );
};

export default StarRatingStep;
