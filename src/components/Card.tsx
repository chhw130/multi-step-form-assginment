import { css } from '@emotion/react';

const cardStyle = css`
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div css={cardStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
