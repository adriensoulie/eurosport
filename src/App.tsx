import PlayerCardContainer from "./components/PlayerCardContainer";
import MatchesHistory from "./components/MatchesHistory";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <PlayerCardContainer />
        <MatchesHistory />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
