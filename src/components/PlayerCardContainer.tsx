import PlayerCard from "./PlayerCard";
import { GetPlayersInfos } from "../gql/api.gql";

export default function PlayerCardContainer({ setLoading, isLoading }: any) {
  const playersInfos = GetPlayersInfos();

  return (
    <div>
      <div className="flex justify-center">
        {playersInfos?.players.map((player) => {
          return <PlayerCard {...player} />;
        })}
      </div>
    </div>
  );
}
