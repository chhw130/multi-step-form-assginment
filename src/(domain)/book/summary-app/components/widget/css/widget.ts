import { css } from '@emotion/react';

export const widgetContainerStyle = css`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  width: 100%;
  max-width: 480px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`;

export const sectionStyle = css`
  padding: 0.5rem 0 0.75rem 0;
  border-bottom: 1px dashed #e2e8f0;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const sectionTitleStyle = css`
  font-size: 0.9rem;
  font-weight: 700;
  color: #4a5568;
  margin-bottom: 0.25rem;
`;

export const sectionValueStyle = css`
  font-size: 0.95rem;
  color: #2d3748;
`;

export const quoteListStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const quoteItemStyle = css`
  border: 1px solid #e2e8f0;
  background: #f7fafc;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.95rem;
  color: #2d3748;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const pageBadgeStyle = css`
  background: #667eea;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
`;
