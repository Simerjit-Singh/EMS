import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="w-[45%] rounded-xl py-6 px-9 bg-red-300">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-blue-300">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Complete Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-green-300">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="w-[45%] rounded-xl py-6 px-9 bg-yellow-200">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
