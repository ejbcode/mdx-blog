import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { H1 } from '../elements';
import { Container, Post, FeaturedImage } from '../components';

const singlePost = ({ data }) => {
  // const featureImage = data.mdx.frontmatter.childImageSharp.fixed;
  console.log('df');
  return (

    <div>
      <p>{data.mdx.frontmatter.title}</p>
    </div>
  );
};

export default singlePost;

export const pageQuery = graphql`
query MyQuery($id: String!) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      date
      excerpt
      slug
      title
      featureImage {
        childImageSharp {
          fixed {
            srcSet
          }
        }
      }
    }
    
  }
}

`;
