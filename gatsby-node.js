exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPages({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: require.resolve('./src/components/demo.js'),
      comtext: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  data.allMdx.edges.forEach((edge) => {
    const { slug } = edge.node.frontmatter;
    const { id } = edge.node;
    actions.createPages({
      path: slug,
      component: require.resolve('./src/components/demo.js'),
      context: { id },
    });
  });
};
