import { Match } from "../type/type";

export default function MatchCard(match: Match) {
  const winner = match.winner;
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex">
          <p>Winner: </p>
          <p>
            {winner.firstname} {winner.lastname}
          </p>
          <img className="h-5 ml-2 w-7" src={winner.country.picture.url} />
        </div>
        <img className="object-contain w-20 h-20" src={winner.picture.url} />
      </div>
    </div>
  );
}
