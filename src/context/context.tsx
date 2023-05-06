import { createContext, useContext, useEffect, useRef, useState } from "react"

interface Question {
  id: number
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

type AppContextProviderProps = {
  children: React.ReactNode
}

interface AppContextType {
  waiting: boolean
  loading: boolean
  error: boolean
  handleStart: () => void
  questions: Question[]
  nextQuestion: () => void
  index: number
  resultScreen: boolean
  checkAnswer: (value: string) => void
  closeResultScreen: () => void
  correct: number
  seconds: number
  startTime: number
  timeTaken: number
}

const AppContext = createContext<AppContextType>({} as AppContextType)

const AppProvider = ({ children }: AppContextProviderProps) => {
  const [waiting, setWaiting] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [index, setIndex] = useState<number>(0)
  const [correct, setCorrect] = useState<number>(0)
  const [resultScreen, setResultScreen] = useState<boolean>(false)
  const [seconds, setSeconds] = useState<number>(60)
  const [startTime, setStartTime] = useState<number>(0)
  const [timeTaken, setTimeTaken] = useState<number>(0)
  const intervalRef = useRef<number>(0)

  // Fetch questions
  const fetchQuestions = async () => {
    setLoading(true)
    setWaiting(false)
    try {
      const response = await fetch("/data.json")
      if (!response.ok) {
        throw new Error("There was en error. Please try again.")
      }
      const data = await response.json()
      setQuestions(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setQuestions([])
      setError(true)
    }
  }

  useEffect(() => {
    if (!waiting) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 1) {
            clearInterval(intervalRef.current)
            setResultScreen(true)
          }
          if (resultScreen) {
            clearInterval(intervalRef.current)
          }
          return prevSeconds - 1
        })
      }, 1000)
      return () => clearInterval(intervalRef.current)
    } else {
      setSeconds(60)
    }
  }, [waiting, resultScreen])

  const handleStart = () => {
    fetchQuestions()
    setStartTime(Date.now()) // record the start time
  }

  const openResultScreen = () => {
    setResultScreen(true)
    setTimeTaken(Date.now() - startTime) // calculate the time taken
  }

  const closeResultScreen = () => {
    setWaiting(true)
    setCorrect(0)
    setResultScreen(false)
  }

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openResultScreen()
        return 0
      } else {
        return index
      }
    })
  }

  const checkAnswer = (value: string) => {
    if (value === questions[index].correct_answer) {
      setCorrect((oldState) => oldState + 1)
    }
    nextQuestion()
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        handleStart,
        questions,
        nextQuestion,
        index,
        resultScreen,
        checkAnswer,
        closeResultScreen,
        correct,
        seconds,
        startTime,
        timeTaken,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
