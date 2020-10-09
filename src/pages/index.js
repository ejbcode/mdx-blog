import React from 'react';

import { Content, ContentCard, Container, FeaturedImage } from '../components';

const IndexPage = () => (
  <Container>
    <FeaturedImage />
    <Content>
      <ContentCard
        date="March 22, 2020"
        title="lorem"
        excerpt=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem iure veniam culpa ratione maiores, incidunt quam vel eum consequatur! Similique mollitia modi qui delectus quos animi eaque distinctio iste non?  "
        slug="/test"
      />
    </Content>
  </Container>
);

export default IndexPage;
