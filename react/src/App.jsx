import Tasks from "./components/Tasks";
import Pokemons from "./components/Pokemons";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";

export default function App() {
  return (
    <Provider store={reduxStore}>
      {/* <Tasks /> */}
      <Pokemons />
    </Provider>
  );
}
