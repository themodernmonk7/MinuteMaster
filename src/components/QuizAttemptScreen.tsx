import { useGlobalContext } from "../context/context";
import { QuizResult } from "../components";

const QuizAttemptScreen = () => {
  const { questions, index, nextQuestion, resultScreen, checkAnswer, seconds } = useGlobalContext();

  const { correct_answer, incorrect_answers, question } = questions[index];
  const answers: (string | string[]) = [correct_answer, ...incorrect_answers];

  if(resultScreen) {
    return <QuizResult/>
  }


  return (
    <section className="p-5 flex flex-col justify-between md:justify-evenly md:items-center h-screen ">
      <div className="space-y-5 md:w-1/3">
        <div className="flex justify-between font-rubik font-medium">
          <p className="text-xs bg-[#72C796] text-white px-5 py-1 rounded-full">
            0{index + 1} / 0{questions.length}{" "}
          </p>
          <p className="text-xs bg-primary-color-300 text-white px-5 py-1 rounded-full">
            0:{Math.floor(seconds / 10)}
            {seconds % 10}
          </p>
        </div>
        <p className="font-open-sans text-sm font-medium">{question} </p>
      </div>

      <div className="space-y-8 p-4 mb-4 md:w-1/3 ">
        {answers.map((answer: string, index: number) => (
          <button
            onClick={() => checkAnswer(answer)}
            key={index}
            className="w-full flex justify-start items-center px-5 py-4 shadow-sm rounded-md border border-gray-100/70  capitalize text-sm tracking-wider  text-left "
          >
            {answer}
          </button>
        ))}
        <button
          onClick={nextQuestion}
          className=" my-5 font-rubik font-medium bg-primary-color-500 text-white block m-auto px-10 py-2 rounded-full"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default QuizAttemptScreen;
