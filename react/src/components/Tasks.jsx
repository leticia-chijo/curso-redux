import { useState } from "react";

export default function Tasks() {
  const [titleInput, setTitleInput] = useState("");
  const [taskInput, setTaskInput] = useState("");

  const onPressAddTitle = () => {
    console.log(titleInput);
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

      <h1>Título da minha lista</h1>
      <ul>
        <li>
          Minha tarefa 1 <button onClick={onPressRemoveTask}>x</button>
        </li>
      </ul>
    </div>
  );
}
