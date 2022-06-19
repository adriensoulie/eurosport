import { GetMatchesHistory, GetPlayersInfos } from "../gql/api.gql";
import MatchCard from "./MatchCard";
import { useState } from "react";

export default function MatchesHistory() {
  const [matchesLimit, setMatchesLimit] = useState(20);
  const playersInfos = GetPlayersInfos();
  const matchesInfos = GetMatchesHistory();
  const showMoreMatches = () => {
    setMatchesLimit(matchesLimit + 10);
  };
  let nadalWinCount = 0;
  let wawrinkaWinCount = 0;

  matchesInfos?.matches.map((match) => {
    match.winner.id == "player-1" ? wawrinkaWinCount++ : nadalWinCount++;
  });

  return (
    <div className="flex flex-col items-center my-12">
      {playersInfos && (
        <h1 className="mt-4 text-4xl font-bold">Head to Head</h1>
      )}
      <div className="flex items-center justify-center w-2/3 p-6 m-2">
        {playersInfos?.players.map((player) => {
          return (
            <div className="px-6 my-6 text-center">
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
      {!matchesInfos && (
        <p className="h-screen text-4xl font-medium">
          Loading match history...
        </p>
      )}
      {matchesInfos && (
        <p className="py-4 text-3xl font-semibold">Match History</p>
      )}
      {matchesInfos?.matches.slice(0, matchesLimit).map((match) => {
        return <MatchCard {...match} />;
      })}
      {matchesInfos && (
        <button
          className="px-4 py-2 my-6 font-bold text-white bg-black border border-black rounded hover:bg-white hover:text-black"
          onClick={() => showMoreMatches()}
        >
          Load more
        </button>
      )}
    </div>
  );
}
