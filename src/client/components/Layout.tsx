import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
  padding: 0 2rem;
  max-width: 1060px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const PageWrapper = styled('div')`
  background-color: dimgrey;
  height: 100%;
  overflow: auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <Container>{children}</Container>
    </PageWrapper>
  );
};

export default Layout;
