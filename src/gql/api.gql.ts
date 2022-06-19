import { GET_MATCHES_HISTORY, GET_PLAYERS_INFOS} from './query.gql'
import { MatchesData, PlayersData } from '../type/type';
import { useQuery } from '@apollo/client';

export const GetPlayersInfos = () => {
    const { data } = useQuery<PlayersData>(GET_PLAYERS_INFOS);
    return data
}

export const GetMatchesHistory = () => {
    const { data } = useQuery<MatchesData>(GET_MATCHES_HISTORY);
    return data
}