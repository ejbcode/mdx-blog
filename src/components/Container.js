import React from 'react';
import { ContainerWrapper } from '../elements';
import { Nav } from '.';

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
  </ContainerWrapper>
);

export default Container;
