import React, { FC } from "react";

interface props {
  jobArray: todoWorks[];
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

interface todoWorks {
  job: string;
  state: boolean;
}

const TodoWork: FC<props> = ({ jobArray, refresh, setRefresh }) => {
  console.log("jobArray", jobArray);

  console.log("refresh", refresh);

  console.log("setRefresh", setRefresh);

  const jobs = localStorage.getItem("job");
  return (
    <>
      {jobs && (
        <div>
          <>
            <h2 className="font-bold text-xl">Things to do</h2>

            {jobArray.map((items: any) => {
              return (
                <div key={items.job}>
                  <div className="flex flex-col space-y-2">
                    {!items.state && (
                      <div className="flex gap-4 ">
                        <input
                          type="checkbox"
                          value={items.job}
                          checked={items.state}
                          onChange={(e) => {
                            const foundIndex = jobArray.findIndex(
                              (x) => x.job == e.target.value
                            );
                            jobArray[foundIndex].state = !items.state;
                            localStorage.setItem(
                              "job",
                              JSON.stringify(jobArray)
                            );
                            setRefresh(!refresh);
                            console.log("abc");
                          }}
                        />
                        <label htmlFor="todo1">{items.job}</label>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
    </>
  );
};
export default TodoWork;
