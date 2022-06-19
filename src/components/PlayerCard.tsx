import { Player } from "../type/type";

export default function PlayerCard(player: Player) {
  const stats = player.stats;

  function weightLoss(weight: number) {
    return weight / 1000;
  }

  function heightConvert(height: number) {
    return height / 100;
  }

  return (
    <div className="flex flex-col items-center justify-center w-[300px] p-6 mt-12 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:cursor-pointer">
      <img className="object-contain w-[100px]" src={player.picture.url} />
      <div className="flex items-center justify-center">
        <div>
          <img
            className="object-contain h-5 mr-2 w-7"
            src={player.country.picture.url}
          />
        </div>
        <p className="pr-2 text-3xl font-bold">{player.firstname}</p>
        <p className="text-3xl font-bold">{player.lastname}</p>
      </div>
      <div className="flex flex-col text-left">
        <p className="pr-2">
          Points: <span className="font-semibold">{stats.points}</span>
        </p>
        <p>
          Age: <span className="font-semibold">{stats.age}</span>
        </p>
        <p>
          Size:{" "}
          <span className="font-semibold">
            {heightConvert(stats.height)} M.
          </span>
        </p>
        <p>
          Weight:{" "}
          <span className="font-semibold">{weightLoss(stats.weight)} Kg.</span>
        </p>
        <p>
          Current rank: <span className="font-semibold">{stats.rank}</span>
        </p>
      </div>
    </div>
  );
}
