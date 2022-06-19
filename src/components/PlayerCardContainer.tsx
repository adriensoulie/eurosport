import PlayerCard from "./PlayerCard";
import { GetPlayersInfos } from "../gql/api.gql";

export default function PlayerCardContainer({ setLoading, isLoading }: any) {
  const playersInfos = GetPlayersInfos();

  return (
    <div className="mt-16">
      {playersInfos && (
        <h1 className="mt-4 text-4xl font-bold text-center">Players stats</h1>
      )}
      <div className="flex justify-center">
        {playersInfos?.players.map((player) => {
          return <PlayerCard {...player} />;
        })}
      </div>
    </div>
  );
}
