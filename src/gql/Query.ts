import { gql } from "@apollo/client";

export const GET_PLAYERS_ID = gql`
  query getPlayersId {
        players {
          __typename
          id
        }
    }
`;