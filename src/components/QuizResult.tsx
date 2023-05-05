import { useGlobalContext } from "../context/context"

const QuizResult = () => {
    const {closeResultScreen, correct, questions, timeTaken} = useGlobalContext()
            
    const scoreFormat = ((correct / questions.length) * 100).toFixed(0)
    const timeFormat = Math.floor((timeTaken)/1000)    

    function displayMotivationalQuote(score: number) {
        if (score < 40) {
          return " Oh Snap, You can do better!";
        } else if (score >= 40 && score < 50) {
          return "Oh Snap, You can do better!";
        } else if (score >= 50 && score < 60) {
          return "Good effort!";
        } else if (score >= 60 && score < 80) {
          return "Good work!";
        } else if (score >= 80 && score < 100) {
          return "Excellent job!";
        } else {
          return "Perfect score! Congratulations!";
        }
      }

      const showText = displayMotivationalQuote(Number(scoreFormat))
      

  return (
    <section className=" py-8 bg-primary-color-100/30 h-screen p-5 flex flex-col justify-between ">
        <div className="space-y-5">
        <h3 className=" text-center text-2xl font-rubik font-bold ">The Daily MS Excel Quiz</h3>
        <div className=" bg-white rounded-md px-8 py-5 text-center space-y-2 shadow-md ">
            <p className=" text-[#4AA571] font-rubik ">You Scored:</p>
            <span className=" block text-primary-color-500 font-rubik text-4xl font-extrabold " >
                {scoreFormat}%
            </span>
            {/* <p className=" font-rubik font-bold " >Oh Snap, You can do better!</p> */}
            <p className=" font-rubik font-bold " > {showText} </p>
            <p className=" font-open-sans text-sm " >Success is not final, failure is not fatal; It is the courage to continue that counts.</p>
        </div>
        <div className=" flex justify-between font-rubik px-5 ">
            <div className=" ">
                <p className=" font-semibold text-lg"  >Your Score</p>
                <span className=" font-extrabold text-3xl text-primary-color-500 " > {correct} / {questions.length} </span>
                <p className=" font-semibold text-sm mt-1" >Avg: {correct * 2} marks</p>
            </div>
            <div className="">
                <p className=" font-semibold text-lg" >Time Taken</p>
                <span className=" font-extrabold text-3xl text-primary-color-500 " > {timeFormat} <span className=" text-black text-sm "  >sec</span> </span>
                <p className=" font-semibold text-sm mt-1" >Avg: {timeFormat} sec</p>
            </div>
        </div>
        </div>

        <button
        onClick={closeResultScreen}
          className=" my-5 font-rubik font-medium bg-primary-color-500 text-white block m-auto px-10 py-2 rounded-full"
        >
          Play Again
        </button>
    </section>
  )
}

export default QuizResult