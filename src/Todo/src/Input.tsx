import React, { FC, useState } from 'react'

interface props {
  refreshJobs: boolean,
  setRefreshJobs: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: FC<props> = ({ refreshJobs, setRefreshJobs }) => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className='m-2' >
      <h1 className='text-2xl font-bold ml-4 '>Create A todo</h1>
      <input className='border p-2 m-2 w-64' type='text' placeholder='Write an article about XState ' value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }} />
      <div className='flex gap-2 ml-4'>
        <button className='px-2 py-1 border border-black bg-yellow-500 text-white rounded-md' onClick={() => {
          const todo = {
            job: inputValue,
            state: false
          }
          const previousItems = localStorage.getItem("jobs")

          if (previousItems) {
            const previousItemsAsObj = JSON.parse(previousItems);
            previousItemsAsObj.push(todo); //doubt obj me push kar r h??
            localStorage.setItem("jobs", JSON.stringify(previousItemsAsObj))

          } else {
            localStorage.setItem("jobs", JSON.stringify([todo]))
          }

          setRefreshJobs(!refreshJobs)
          setInputValue("")



          //localStorage.setItem("jobs", [])
        }}>Save</button>
        <button className='px-2 py-1 border border-black bg-white text-black rounded-md'>Cancel</button>
      </div>


    </div>
  )
}

export default Input;