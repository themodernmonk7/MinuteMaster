
import {QuizDetailScreen, QuizAttemptScreen} from './components'
import { useGlobalContext } from './context/context'
function App() {
  const {loading, waiting} = useGlobalContext()

  if(waiting) {
    return <QuizDetailScreen/>
  }


  if(loading) return <p>Loading...</p>
  
  return (
    <>
     
    <QuizAttemptScreen/>
    </>
  )
}

export default App
