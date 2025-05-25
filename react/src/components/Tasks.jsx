import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../redux/Title/titleActions";
import { addTask, removeTask } from "../redux/Task/taskActions";

export default function Tasks() {
  const [titleInput, setTitleInput] = useState("");
  const [taskInput, setTaskInput] = useState("");
  
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);
  const tasks = useSelector((state) => state.tasks);

  const onPressAddTitle = () => {
    dispatch(addTitle(titleInput));
    setTitleInput("");
  };

  const onPressAddTask = () => {
    dispatch(addTask(taskInput));
    setTaskInput("");
  };

  const onPressRemoveTask = (task) => {
    dispatch(removeTask(task));
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
        {tasks.map((task) => (
          <li key={task}>
            {task} <button onClick={() => onPressRemoveTask(task)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
