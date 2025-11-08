import { css } from '@emotion/react';

export const formStyle = css`
  min-width: 500px;
`;

export const buttonGroupStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
