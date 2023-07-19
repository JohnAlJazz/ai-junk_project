import { useGlobalContext } from '../context'

const Answers = () => {
 const { checkAnswer, isAnswerChosen, isCorrectAnswer } = useGlobalContext();
 
 const answers = ['Pink', 'Yellow', 'Red', 'Blue'];

 return (
   <div className='btn-container'>
     {answers.map((answer, i) => {
       return (
         <button key={i} className='answer-btn' onClick={() => checkAnswer(i)}>
           {answer}
         </button>
       )
     })}     
     {isAnswerChosen ?
      (isCorrectAnswer ? 
       <h1 className='correct-answer'>Correct!</h1> :
       <h1 className='wrong-answer'>Wrong!</h1>
      ) : null}
   </div>
 )
}

export default Answers