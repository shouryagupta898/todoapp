import { FC, memo } from "react";

interface props {
    jobArray: eachJob[]
}

interface eachJob {
    job: string,
    state: boolean
}

const ThingsDone: FC<props> = ({ jobArray }) => {
    const jobs = (localStorage.getItem("jobs"));

    return (<>

        {jobs && <div>
            <h2 className='font-bold text-3xl pb-2'>Things to do</h2>

            {
                jobArray.map((todo: any) => {
                    return (
                        <>
                            {todo.state &&
                                <div className='flex gap-4 '>
                                    <input type="checkbox" checked={todo.state} value="text" />
                                    <label htmlFor='todo1'>{todo.job}</label>
                                </div>
                            }
                        </>
                    )
                })
            }


        </div>}
    </>
    )

};

ThingsDone.defaultProps = {};

export default memo(ThingsDone);
