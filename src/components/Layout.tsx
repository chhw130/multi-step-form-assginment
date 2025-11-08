import { css } from '@emotion/react';
import TheHeader from './TheHeader';

const LayoutContainer = css`
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  padding: 0 20px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TheHeader />
      <div css={LayoutContainer}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
