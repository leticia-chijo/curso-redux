import { Provider } from "react-redux";
import store from "./redux/store";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
