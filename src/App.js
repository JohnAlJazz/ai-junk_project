import React from 'react'
import { useGlobalContext } from './context'
import {Video, Question} from './Components'

function App() {
  const { isVideoEnded } = useGlobalContext()  

  return (
    <main>
      {<Video />}
      {isVideoEnded && <Question />}      
    </main>
  )
}

export default App