import { css } from '@emotion/react';

const headerStyles = css`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
`;

const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const TheHeader = () => {
  return (
    <header css={headerStyles}>
      <div css={containerStyles}></div>
    </header>
  );
};

export default TheHeader;
