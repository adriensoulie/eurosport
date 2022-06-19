import "./App.css";
import PlayerCard from "./components/PlayerCard";
import MatchCard from "./components/Match";
import { GetMatchesHistory, GetPlayersInfos } from "./gql/api.gql";

function App() {
  const playersInfos = GetPlayersInfos();
  const matchesInfos = GetMatchesHistory();
  console.log(matchesInfos);
  // console.log(data);

  return (
    <div className="App">
      <div>
        <div className="flex justify-evenly">
          {playersInfos?.players.map((player) => {
            return <PlayerCard {...player} />;
          })}
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="mt-4 text-4xl font-bold">Previous Encounter</h1>
          <div className="flex items-center justify-center">
            {playersInfos?.players.map((player) => {
              return (
                <div className="flex px-6 my-6">
                  <img
                    className="object-contain h-5 mr-2 w-7"
                    src={player.country.picture.url}
                  />
                  <p className="font-semibold">
                    {player.firstname} {player.lastname}
                  </p>
                </div>
              );
            })}
          </div>

          {matchesInfos?.matches.map((match) => {
            return <MatchCard {...match} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
