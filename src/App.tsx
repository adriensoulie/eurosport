import "./App.css";
import PlayerCardContainer from "./components/PlayerCardContainer";
import MatchesHistory from "./components/MatchesHistory";

function App() {
  return (
    <div className="App">
      <div>
        <PlayerCardContainer />
        <MatchesHistory />
      </div>
    </div>
  );
}

export default App;
