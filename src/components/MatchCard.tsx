import { Match } from "../type/type";

export default function MatchCard(match: Match) {
  const winner = match.winner;
  function getMatchDate(date: string) {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return day + "/" + month + "/" + year;
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[360px] items-center justify-center p-6 m-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:cursor-pointer">
        <div className="flex items-center">
          <p className="pr-2 italic">{getMatchDate(match.startTime)}</p>
          <p className="pl-1 font-medium">
            {winner.firstname} {winner.lastname}
          </p>
          <img className="h-5 ml-2 w-7" src={winner.country.picture.url} />
          <p className="pl-2 text-sm font-bold text-lime-500">WIN</p>
        </div>
      </div>
    </div>
  );
}
