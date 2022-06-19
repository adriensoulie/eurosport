import { GetMatchesHistory, GetPlayersInfos } from "../gql/api.gql";
import MatchCard from "./MatchCard";

export default function MatchesHistory() {
  const playersInfos = GetPlayersInfos();
  const matchesInfos = GetMatchesHistory();
  let nadalWinCount = 0;
  let wawrinkaWinCount = 0;

  matchesInfos?.matches.map((match) => {
    match.winner.id == "player-1" ? wawrinkaWinCount++ : nadalWinCount++;
  });

  return (
    <div className="flex flex-col items-center my-12">
      <h1 className="mt-4 text-4xl font-bold">Head to Head</h1>
      <div className="flex items-center justify-center w-2/3 p-6 m-2">
        {playersInfos?.players.map((player) => {
          return (
            <div className="px-6 my-6 ">
              <div className="flex items-center">
                <img
                  className="object-contain h-5 mr-2 w-7"
                  src={player.country.picture.url}
                />
                <p className="text-3xl font-medium">
                  {player.firstname} {player.lastname}
                </p>
              </div>
              <p
                className={`pl-1 mt-4 text-4xl font-extrabold ${
                  wawrinkaWinCount > nadalWinCount && player.id === "player-1"
                    ? "text-lime-500"
                    : "text-red-500"
                }`}
              >
                {player.id === "player-1" ? wawrinkaWinCount : nadalWinCount}
              </p>
            </div>
          );
        })}
      </div>
      <p className="py-4 text-3xl font-semibold">Match History</p>
      {matchesInfos?.matches.map((match) => {
        return <MatchCard {...match} />;
      })}
    </div>
  );
}
