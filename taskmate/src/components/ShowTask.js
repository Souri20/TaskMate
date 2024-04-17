import React from "react";

function ShowTask({taskList, setTaskList, task, setTask}) {
    const handleDelete = (id) =>{
      setTaskList(taskList.filter((task)=> task.id !==id))
    }

    const handleEdit = (id) =>{
        const toEditObj = taskList.find((ele)=> ele.id === id)
        setTask(toEditObj);
    }
 
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={()=>setTaskList([])}>clear all</button>
      </div>
      <ul>
        {taskList.map((task)=>(
            <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={()=>handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={()=>handleDelete(task.id)}></i>
          </li>
        ))}
        
      </ul>
    </section>
  );
}

export default ShowTask;
