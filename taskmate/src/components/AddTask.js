import React from "react";

function AddTask({ taskList, setTaskList }) {
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    // console.log(e.target.task.value);
    const newTask = {
      id: date.getTime(),
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      name : e.target.task.value

    };
    setTaskList([...taskList, newTask]);
    e.target.task.value = ""
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddTask;
