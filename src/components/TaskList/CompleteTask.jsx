import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="shrink-0 h-full w-115 p-5 bg-blue-300 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-lg mt-3">{data.taskDescription}</p>
      <div className="mt-2">
        <button className="bg-green-800 w-full">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
