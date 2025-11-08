import { FormProvider, useFormContext } from 'react-hook-form';
import ReportBasicStep from '../steps/ReportBasicStep';
import StarRatingStep from '../steps/StarRatingStep';
import BookReportStep from '../steps/BookReportStep';
import QuoteStep from '../steps/QuoteStep';
import DisclosureStep from '../steps/DisclosureStep';
import { buttonGroupStyle, formStyle } from './css/reportForm';
import PrevButton from '../button/PrevButton';
import NextButton from '../button/NextButton';
import { useMultiStep } from '@/hooks/useMultiStep';
import SubmitButton from '../button/SubmitButton';
import { BookReportForm } from '@/(domain)/book/report/consts/consts';

//이곳에 밖에 쓰이지 않는 상수이기 때문에 여기에 둠.
const STEP_COMPONENTS = {
  '독서 기본 정보': <ReportBasicStep />,
  '독서 추천': <StarRatingStep />,
  독후감: <BookReportStep />,
  인용구: <QuoteStep />,
  '공개 여부': <DisclosureStep />,
};

export const BOOK_REPORT_STEP = [
  '독서 기본 정보',
  '독서 추천',
  '독후감',
  '인용구',
  '공개 여부',
] as const;

const ReportForm = () => {
  const { currentStep, navigateNextStep, navigatePrevStep, isFirstStep, isLastStep } =
    useMultiStep(BOOK_REPORT_STEP);

  const form = useFormContext<BookReportForm>();

  const onClickNextButton = async () => {
    const isValid = await form.trigger();
    if (!isValid) {
      return;
    }
    navigateNextStep();
  };

  const onSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <form css={formStyle} onSubmit={form.handleSubmit(onSubmit)}>
      <FormProvider {...form}>
        <section>{STEP_COMPONENTS[currentStep]}</section>
        <section css={buttonGroupStyle}>
          <PrevButton type="button" disabled={isFirstStep} onClick={navigatePrevStep}>
            이전
          </PrevButton>

          {!isLastStep ? (
            <NextButton onClick={onClickNextButton} type="button">
              다음
            </NextButton>
          ) : (
            <SubmitButton type="submit">제출</SubmitButton>
          )}
        </section>
      </FormProvider>
    </form>
  );
};

export default ReportForm;
