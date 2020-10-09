import React from 'react';
import { PaginationElement, PaginationWrapper } from '../elements';

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => (
  <PaginationWrapper isFirst={isFirst} isLast={isLast}>
    <PaginationElement to={prevPage}>previous</PaginationElement>
    <PaginationElement to={nextPage}>Next</PaginationElement>
  </PaginationWrapper>
);

export default Pagination;
