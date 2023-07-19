import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isAnswerChosen, setIsAnswerChosen] = useState(false);   
    
  const checkAnswer = (idx) => {    
    if(idx === 0) {
      setIsCorrectAnswer(true);
    }
    else {
      setIsCorrectAnswer(false);
    }
    setIsAnswerChosen(true);
  }
  
  return <AppContext.Provider value={{     
    isVideoEnded,
    isCorrectAnswer,
    isAnswerChosen,
    setIsVideoEnded,
    checkAnswer,    
  }}
  >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }