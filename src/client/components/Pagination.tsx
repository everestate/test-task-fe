import styled from '@emotion/styled';
import React from 'react';

const Container = styled('div')`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

const PageButton = styled('a')`
  color: white;
  float: left;
  font-size: 16px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: cyan;
    color: dimgrey;
  }
`;

const Pagination: React.FC = () => {
  return (
    <Container>
      <PageButton>&laquo;</PageButton>

      <PageButton>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>

      <PageButton>&raquo;</PageButton>
    </Container>
  );
};

export default Pagination;
