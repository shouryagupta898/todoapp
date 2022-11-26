import React, { FC, useState } from "react";

interface props {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  inputClass: string;
  setInputClass: React.Dispatch<React.SetStateAction<string>>;
  button:string,
  setButton:React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<props> = ({
  refresh,
  setRefresh,
  inputClass,
  setInputClass,
  button,
  setButton
}) => {
  const [work, setWork] = useState("");
  return (
    <div className="m-2">
      <h1 className="text-2xl font-bold ml-4 ">Create A todo</h1>
      <input
        className="border p-2 m-2 w-64"
        type="text"
        placeholder="Write an article about XState "
        value={work}
        onChange={(e) => {
          setWork(e.target.value);
        }}
      />
      <div className="flex gap-2 ml-4">
        <button
          className="px-2 py-1 border border-black bg-yellow-500 text-white rounded-md"
          onClick={() => {
            const todo = {
              job: work,
              state: false,
            };
            const previousJobs = localStorage.getItem("job");
            if (previousJobs) {
              const previousJobsObj = JSON.parse(previousJobs);
              previousJobsObj.push(todo);
              localStorage.setItem("job", JSON.stringify(previousJobsObj));
            } else {
              localStorage.setItem("job", JSON.stringify([todo]));
            }
            setRefresh(!refresh);
            setWork("");
          }}
        >
          Save
        </button>
        <button
          className="px-2 py-1 border border-black bg-white text-black rounded-md"
          onClick={() => {
            setInputClass("hidden");
            setButton("visible")
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Input;
