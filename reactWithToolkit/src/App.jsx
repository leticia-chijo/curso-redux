import { Provider } from "react-redux";
import store from "./redux/store";
import Tasks from "./components/Tasks";
import Pokemons from "./components/Pokemons";

export default function App() {
  return (
    <Provider store={store}>
      {/* <Tasks /> */}
      <Pokemons />
    </Provider>
  );
}
