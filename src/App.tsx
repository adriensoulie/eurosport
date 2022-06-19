import PlayerCardContainer from "./components/PlayerCardContainer";
import MatchesHistory from "./components/MatchesHistory";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <PlayerCardContainer />
        <MatchesHistory />
        <Footer />
      </div>
    </div>
  );
}

export default App;
