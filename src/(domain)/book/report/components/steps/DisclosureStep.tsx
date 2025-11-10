import { BookReportForm } from '@/(domain)/book/report/consts/consts';
import { containerStyle, titleStyle, subtitleStyle, errorStyle, radioGroupStyle } from './css/step';
import { useFormContext } from 'react-hook-form';

const DISCLOSURE_SCHEMA = {
  required: '공개 여부를 선택해주세요.',
};

const DisclosureStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<BookReportForm>();

  //공개 여부 상태를 즉각적으로 widget에 반영하려면 리렌더링 혹은 제어 컴포넌트 느낌으로 써야할 거 같음.

  return (
    <article css={containerStyle}>
      <h2 css={titleStyle}>공개 여부</h2>
      <p css={subtitleStyle}>독서 기록을 공개 여부를 선택해주세요.</p>

      <div css={radioGroupStyle}>
        <input
          type="radio"
          id="public"
          value="public"
          {...register('disclosure', DISCLOSURE_SCHEMA)}
        />
        <label htmlFor="public">공개</label>

        <input
          type="radio"
          id="private"
          value="private"
          {...register('disclosure', DISCLOSURE_SCHEMA)}
        />
        <label htmlFor="private">비공개</label>
      </div>

      {errors.disclosure && <p css={errorStyle}>{errors.disclosure.message}</p>}
    </article>
  );
};

export default DisclosureStep;
