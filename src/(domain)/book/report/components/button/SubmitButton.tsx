import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const primaryButtonStyle = css`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
`;

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  return (
    <button css={primaryButtonStyle} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
