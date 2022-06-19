import { gql } from "@apollo/client";

export const GET_PLAYERS_ID = gql`
  query getPlayersId {
        players {
          __typename
          id
        }
    }
`;

export const GET_PLAYERS_INFOS = gql`
  query getPlayersInfos {
    players {
      __typename
      id
      firstname
      lastname
      shortname
      sex
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        rank
        points
        weight
        height
        age
      }
      __typename
    }
  }  
`;


export const GET_MATCHES_HISTORY = gql`
  query getMatchesInfos {
    matches {
      id
      players {
        id
        shortname
      }
      winner {
        country {
          picture {
            url
          }
        }
        picture {
          url
        }
        id
        firstname
        lastname
      }
  
      startTime
      endTime
    }
  }
`



