exports.createPages = async ({ actions, graphql }) => {
  const data = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              date
              excerpt
            }
          }
        }
      }
    }
  `);
  console.log('------');

  console.log(data.data.allMdx.edges.node.frontmatter);

  console.log('------');
  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  console.log(numPages);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: require.resolve('./src/templates/allPosts.js'),
      comtext: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // data.allMdx.edges.forEach((edge) => {
  //   const { slug } = edge.node.frontmatter;
  //   const { id } = edge.node;
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve('./src/components/demo.js'),
  //     context: { id },
  //   });
  // });
};
