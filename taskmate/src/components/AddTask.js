import React from "react";

function AddTask({ taskList, setTaskList, task, setTask }) {
  function handleSubmit(e) {
    if (task.id) {
      e.preventDefault();
      const date = new Date;
      const updatedObj  = taskList.map((todo)=>(
        todo.id === task.id ? {id : task.id , name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));

      setTaskList(updatedObj);

    } else {
      e.preventDefault();
      const date = new Date();
      console.log(e.target.task.value);
      const newTask = {
        id: date.getTime(),
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        name: e.target.task.value,
      };
      setTaskList([...taskList, newTask]);
      e.target.task.value = "";
      task.name = '';
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name}
          autoComplete="off"
          placeholder="add task"
          onChange={e=> setTask({...task, name : e.target.value})}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;
