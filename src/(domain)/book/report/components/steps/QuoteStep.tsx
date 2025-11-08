import { Controller, FieldError, useFieldArray, useFormContext } from 'react-hook-form';
import { BookReportForm } from '@/(domain)/book/report/consts/consts';
import { Quote } from '@/(domain)/book/share/consts/consts';
import {
  containerStyle,
  titleStyle,
  subtitleStyle,
  inputStyle,
  errorStyle,
  labelStyle,
  quoteFieldGroupStyle,
  quoteInputGroupStyle,
  addButtonStyle,
  removeButtonStyle,
  quoteCountStyle,
  pageCountStyle,
} from './css/step';
import { BOOK_PAGE, NUMBER_VALIDATION } from '@/(domain)/book/report/consts/consts';
import Card from '@/components/Card';

const generateQuoteSchema = (quote: Quote[]) => {
  const isRequiredPage = quote.length > 1;

  const quoteSchema = quote.map(() => ({
    quote: {
      required: '인용구를 입력해주세요.',
    },
    page: {
      valueAsNumber: true,
      validate: (page: number) => {
        if (!isRequiredPage) {
          return true;
        }

        if (page < 1 || page > BOOK_PAGE) {
          return '올바른 페이지를 입력해주세요.';
        }
        return true;
      },
    },
  }));

  return {
    quoteInfo: quoteSchema,
  };
};

const generateQuoteError = (errors: { quote?: FieldError; page?: FieldError }) => {
  if (!errors) {
    return false;
  }
  return errors.quote?.message || errors.page?.message;
};

const QuoteStep = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<BookReportForm>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'quoteInfo',
  });

  const quoteSchema = generateQuoteSchema(fields);

  return (
    <article css={containerStyle}>
      <h2 css={titleStyle}>인용구</h2>
      <label css={subtitleStyle}>
        인용구를 입력해주세요. <br />
        <p css={pageCountStyle}> (전체 도서 페이지: {BOOK_PAGE}p) </p>
      </label>
      <div css={quoteFieldGroupStyle}>
        {fields.map((field, index) => {
          const isDisabledRemove = fields.length === 1;
          const quoteError = errors.quoteInfo?.[index];

          return (
            <Card key={field.id}>
              <button
                type="button"
                disabled={isDisabledRemove}
                css={removeButtonStyle}
                onClick={() => remove(index)}
              >
                삭제
              </button>

              <div css={quoteInputGroupStyle}>
                <label htmlFor={`quote-${index}`} css={labelStyle}>
                  <span css={quoteCountStyle}>{index + 1}</span>
                  인용구
                </label>
                <input
                  type="text"
                  id={`quote-${index}`}
                  placeholder="인용구를 입력해주세요."
                  {...register(`quoteInfo.${index}.quote`, quoteSchema.quoteInfo[index].quote)}
                  css={inputStyle}
                />
              </div>

              <div css={quoteInputGroupStyle}>
                <label htmlFor={`page-${index}`} css={labelStyle}>
                  페이지 번호
                </label>
                <Controller
                  control={control}
                  rules={quoteSchema.quoteInfo[index].page}
                  name={`quoteInfo.${index}.page`}
                  render={({ field }) => {
                    const pageValue = field.value <= 0 ? '' : field.value;
                    return (
                      <input
                        id={`page-${index}`}
                        placeholder="페이지를 입력해주세요."
                        value={pageValue}
                        css={inputStyle}
                        onChange={(e) => {
                          const value = e.target.value.replace(NUMBER_VALIDATION, '');
                          field.onChange(Number(value));
                        }}
                      />
                    );
                  }}
                />
              </div>

              {quoteError && <p css={errorStyle}>{generateQuoteError(quoteError)}</p>}
            </Card>
          );
        })}
      </div>

      <button type="button" css={addButtonStyle} onClick={() => append({ quote: '', page: -1 })}>
        인용구 추가
      </button>
    </article>
  );
};

export default QuoteStep;
