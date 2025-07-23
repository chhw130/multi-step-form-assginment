import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

const secondaryButtonStyle = css`
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
  background: #f7fafc;
  color: #4a5568;
  border: 2px solid #e2e8f0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  &:hover:not(:disabled) {
    background: #edf2f7;
    border-color: #cbd5e0;
  }
`;

type PrevButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const PrevButton = ({ children, ...props }: PrevButtonProps) => {
  return (
    <button css={secondaryButtonStyle} {...props}>
      {children}
    </button>
  );
};

export default PrevButton;
