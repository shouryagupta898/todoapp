import React, { FC } from "react";

interface props {
  jobArray: todoWork[];
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

interface todoWork {
  job: string;
  state: boolean;
}

const CompleteWork: FC<props> = ({ jobArray, refresh, setRefresh }) => {
  const jobs = localStorage.getItem("job");
  return (
    <div>
      {jobs && (
        <div>
          <>
            <h1 className="font-bold text-xl">Things done</h1>

            {jobArray.map((items: any) => {
              return (
                <div key={items.job}>
                  <div className="flex flex-col space-y-2">
                    {items.state && (
                      <div className="flex gap-4">
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
                          }}
                        />
                        <label htmlFor="done1">{items.job}</label>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
};

export default CompleteWork;
