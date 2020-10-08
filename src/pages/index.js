import React from 'react';
import { Content, ContentCard, Container, FeaturedImage } from '../components';

const IndexPage = () => (
  <Container>
    <FeaturedImage />
    <Content>
      <ContentCard
        date="March 22, 2020"
        title="lorem"
        excerpt="sdsd"
        slug="/test"
      />
    </Content>
  </Container>
);

export default IndexPage;
