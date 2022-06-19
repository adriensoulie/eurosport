import PlayerCard from "./PlayerCard";
import { GetPlayersInfos } from "../gql/api.gql";

export default function PlayerCardContainer() {
  const playersInfos = GetPlayersInfos();
  return (
    <div className="flex justify-evenly">
      {playersInfos?.players.map((player) => {
        return <PlayerCard {...player} />;
      })}
    </div>
  );
}
