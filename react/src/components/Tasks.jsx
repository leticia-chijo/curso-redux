import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../redux/Title/titleActions";

export default function Tasks() {
  const [titleInput, setTitleInput] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);

  const onPressAddTitle = () => {
    dispatch(addTitle(titleInput));
    setTitleInput("");
  };

  const onPressAddTask = () => {
    console.log(taskInput);
  };

  const onPressRemoveTask = (task) => {
    console.log(task);
  };

  return (
    <div>
      <input
        placeholder="Adicione um Título"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <button onClick={onPressAddTitle}>+</button>

      <br />
      <br />

      <input
        placeholder="Adicione uma Tarefa"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={onPressAddTask}>+</button>

      <h1>{title}</h1>
      <ul>
        <li>
          Minha tarefa 1 <button onClick={onPressRemoveTask}>x</button>
        </li>
      </ul>
    </div>
  );
}
