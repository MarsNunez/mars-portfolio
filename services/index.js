import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projectsConnection {
        edges {
          node {
            title
            link
            image {
              url
            }
            technologies {
              name
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.projectsConnection.edges;
};
