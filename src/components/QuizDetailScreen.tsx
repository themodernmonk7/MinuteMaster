
import {MdOutlineError} from 'react-icons/md'
import { useGlobalContext } from '../context/context'
import {detailList } from '../constants/constant'
import IllustrationImage from '../assets/illustration.webp'
import { Button } from "../components"

const QuizDetailScreen = () => {
  const { handleStart } = useGlobalContext()

  return (
    <>
      <section className="flex flex-col justify-between items-center h-screen pb-10 ">
        <div className=" ">
          <img src={IllustrationImage} alt="" className=" h-52 object-cover " />
        </div>

        <div className=" p-8 ">
          <h1 className=" font-rubik font-semibold text-2xl  ">Quiz Rules</h1>
          {detailList.map((list) => {
            const { id, title, description, icon } = list
            return (
              <div
                key={id}
                className=" flex justify-start items-center space-x-5 my-5 "
              >
                <span> {icon} </span>
                <div>
                  <p className=" font-rubik font-medium  ">{title}</p>
                  <p className=" font-open-sans text-sm ">{description}</p>
                </div>
              </div>
            )
          })}
          <div className=" py-5 flex justify-center items-center space-x-2 ">
            <MdOutlineError className="fill-purple-500 " />
            <p className=" text-sm text-gray-600 ">
              {" "}
              This quiz can only be attempted once daily.{" "}
            </p>
          </div>

          <Button onClick={handleStart} text="start" />
        </div>
      </section>
    </>
  )
}

export default QuizDetailScreen