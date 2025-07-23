import { css } from '@emotion/react';

export const containerStyle = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

export const titleStyle = css`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

export const labelStyle = css`
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

export const selectStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const inputStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &:disabled {
    background: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

export const textareaStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  height: 200px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const errorStyle = css`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

export const subtitleStyle = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a5568;
  margin: 2rem 0 1rem 0;
`;

export const dateGroupStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const reportContainerStyle = css`
  display: flex;
  align-items: flex-start;
  min-height: 2rem;
  margin-top: 0.5rem;
`;

export const reportLengthStyle = css`
  font-size: 0.875rem;
  color: #a0aec0;
  margin-left: auto;
`;

export const quoteFieldGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

export const quoteInputGroupStyle = css`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const addButtonStyle = css`
  width: 100%;
  padding: 0.875rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const removeButtonStyle = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: #fed7d7;
  color: #c53030;
  border: 1px solid #feb2b2;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #feb2b2;
    color: #9b2c2c;
  }

  &:disabled {
    background: #edf2f7;
    color: #a0aec0;
    border-color: #cbd5e0;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const quoteCountStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: #667eea;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.5rem;
`;

export const pageCountStyle = css`
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
