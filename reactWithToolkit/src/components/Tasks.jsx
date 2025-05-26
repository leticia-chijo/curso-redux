import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/taskSlice";

export default function Tasks() {
  const [taskInput, setTaskInput] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

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
        placeholder="Adicione uma Tarefa"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={onPressAddTask}>+</button>

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
