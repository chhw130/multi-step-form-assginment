import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
`;

type NextButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NextButton = ({ children, ...props }: NextButtonProps) => {
  return (
    <button css={primaryButtonStyle} {...props}>
      {children}
    </button>
  );
};

export default NextButton;
