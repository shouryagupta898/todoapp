import React, { FC, useState  } from 'react'
import Input from './Input'
import ThingsDone from './ThingsDone'
import ThingsToDo from './ThingsToDo'


const Todo: FC = () => {

  const [inputClass, setInputClass] = useState("hidden")

  const [refreshJobs, setRefreshJobs] = useState(true)

  const jobs = (localStorage.getItem("jobs"));

  let jobArray;

  if (jobs) {
    jobArray = JSON.parse(jobs)
  }


  return (
    <div>
      <div className='border pl-2 py-4 text-2xl '>XTodo</div>
      <div className='flex flex-col items-start pl-10 space-y-5 mt-4' >
        <h1 className='font-bold text-3xl'>Things to get done</h1>
        <button className='px-2 py-1 border border-black bg-yellow-500 text-white rounded-md'>Refresh</button>
        <div className='flex flex-col space-y-2'>
          {jobs && <ThingsToDo jobArray={jobArray} />}
          <div>
            <button
              className='px-2 py-1 border border-black bg-yellow-500 text-white rounded-full mt-2'
              onClick={() => {
                setInputClass("visible")
              }}>+ Add a todo</button>
          </div>
          <div className={inputClass}>
            <Input refreshJobs={refreshJobs} setRefreshJobs={setRefreshJobs} />
          </div>
          {jobs && <ThingsDone jobArray={jobArray} />}
        </div>
      </div>
    </div>
  )
}

export default Todo;