
import {QuizDetailScreen, QuizAttemptScreen} from './components'
import { useGlobalContext } from './context/context'
import { Loading } from "./components"

function App() {
  const { loading, waiting } = useGlobalContext()

  if (waiting) {
    return <QuizDetailScreen />
  }

  if (loading) return <Loading />

  return (
    <>
      <QuizAttemptScreen />
    </>
  )
}

export default App
