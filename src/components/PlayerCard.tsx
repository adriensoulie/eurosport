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
    <div className="flex flex-col items-center justify-center w-[300px] p-6 my-12 mx-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:cursor-pointer">
      <img className="object-contain w-[100px]" src={player.picture.url} />
      <div className="flex items-center justify-center">
        <div>
          <img
            className="object-contain h-5 mr-2 w-7"
            src={player.country.picture.url}
          />
        </div>
        <p className="my-3 text-3xl font-normal">
          {player.firstname} <span className="pl-1"> {player.lastname}</span>
        </p>
      </div>
      <div className="flex flex-col mb-4 text-left">
        <p className="pb-3 text-2xl font-semibold text-center border-b">
          Rank <span className="font-bold ">{stats.rank}</span>
        </p>
        <p className="mt-3">
          Points: <span className="pl-1 font-semibold"> {stats.points}</span>
        </p>
        <p>
          Age:{" "}
          <span className="pl-1 text-base font-semibold"> {stats.age}</span>
        </p>
        <p>
          Size:
          <span className="pl-1 font-semibold">
            {heightConvert(stats.height)} m.
          </span>
        </p>
        <p>
          Weight:
          <span className="pl-1 font-semibold">
            {weightLoss(stats.weight)} kg.
          </span>
        </p>
      </div>
    </div>
  );
}
