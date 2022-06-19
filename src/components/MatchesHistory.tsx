import { GetMatchesHistory, GetPlayersInfos } from "../gql/api.gql";
import { useState } from "react";
import MatchCard from "./Match";

export default function MatchesHistory() {
  const playersInfos = GetPlayersInfos();
  const matchesInfos = GetMatchesHistory();
  let nadalWinCount = 0;
  let wawrinkaWinCount = 0;

  console.log("infos", matchesInfos);
  matchesInfos?.matches.map((match) => {
    console.log(match.winner.id);
    match.winner.id == "player-1" ? wawrinkaWinCount++ : nadalWinCount++;
  });

  return (
    <div className="flex flex-col mt-12">
      <h1 className="mt-4 text-4xl font-bold">Head to Head</h1>
      <div className="flex items-center justify-center">
        {playersInfos?.players.map((player) => {
          return (
            <div className="flex px-6 my-6">
              <img
                className="object-contain h-5 mr-2 w-7"
                src={player.country.picture.url}
              />
              <p className="font-semibold">
                {player.firstname} {player.lastname}:
              </p>
              <p className="pl-1">
                {player.id === "player-1" ? wawrinkaWinCount : nadalWinCount}{" "}
                Win
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
