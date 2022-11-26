import React, { FC, useState } from "react";
import CompleteWork from "./CompleteWork";
import Input from "./Input";
import TodoWork from "./TodoWork";

const Todo: FC = () => {
  const [inputClass, setInputClass] = useState("hidden");
  const [button,setButton] =useState("visible")
  const [refresh, setRefresh] = useState(false);

  const works = localStorage.getItem("job");
  let jobArray;

  if (works) {
    jobArray = JSON.parse(works);
  }

  return (
    <div>
      <div className="border pl-2 py-4 text-2xl ">XTodo</div>
      <div className="flex flex-col items-start pl-10 space-y-5 mt-4">
        <h1 className="font-bold text-3xl">Things to get done</h1>
        <button className="px-2 py-1 border border-black bg-yellow-500 text-white rounded-md">
          Refresh
        </button>
        <div>
          {works && (
            <TodoWork
              jobArray={jobArray}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}
        </div>

        <div>
          <button
            className={"px-2 py-1 border border-black bg-yellow-500 text-white rounded-full mt-2 "+ button}
            onClick={() => {
              setInputClass("visible");
              setButton("hidden")
            }}
          >
            + Add a todo
          </button>
        </div>
        <div className={"bg-red-300 " + inputClass}>
          <Input
            refresh={refresh}
            setRefresh={setRefresh}
            inputClass={inputClass}
            setInputClass={setInputClass}
            button={button}
            setButton={setButton}
          />
        </div>
        <div>
          {works && (
            <CompleteWork
              jobArray={jobArray}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
