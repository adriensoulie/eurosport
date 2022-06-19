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
        <div className="flex flex-col">
          <h1>Previous Encounter</h1>
          {matchesInfos?.matches.map((match) => {
            return <MatchCard {...match} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
