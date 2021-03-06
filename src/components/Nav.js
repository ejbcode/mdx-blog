import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { NavWrapper } from '../elements';

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="logo" />
      </Link>
    </NavWrapper>
  );
};

export default Nav;
