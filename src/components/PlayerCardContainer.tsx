import PlayerCard from "./PlayerCard";
import { GetPlayersInfos } from "../gql/api.gql";

export default function PlayerCardContainer({ setLoading, isLoading }: any) {
  const playersInfos = GetPlayersInfos();

  return (
    <div>
      <h1 className="p-6 text-4xl font-bold text-left">Eurosport Tennis</h1>
      <div className="flex justify-center">
        {playersInfos?.players.map((player) => {
          return <PlayerCard {...player} />;
        })}
      </div>
    </div>
  );
}
