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

  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed || data.imageSharp.fixed}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'red solid 1px',
        }}
      />
    </FeatureImageWrapper>
  );
};

export default FeaturedImage;
