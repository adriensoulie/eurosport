import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_PLAYERS_ID } from "./gql/Query";

function App() {
  const { loading, error, data } = useQuery(GET_PLAYERS_ID);
  console.log(data);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold ©">Hello world!</h1>
    </div>
  );
}

export default App;
