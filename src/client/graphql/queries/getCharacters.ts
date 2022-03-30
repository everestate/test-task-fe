import { gql } from '@apollo/client';

export * from './__generated__/GetCharacters';

export const GET_CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        origin {
          id
          name
          dimension
        }
        species
        image
        location {
          id
          name
          dimension
        }
        gender
        status
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;
