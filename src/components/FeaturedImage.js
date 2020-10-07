import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FeatureImageWrapper } from '../elements';

export const FeaturedImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "image.jpeg" } }) {
        id
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `);

  console.log(data.imageSharp.fixed);
  return (
    <FeatureImageWrapper>
      <p>sds</p>
      <Img
        fixed={fixed || data.imageSharp.fixed}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </FeatureImageWrapper>
  );
};

export default FeaturedImage;
