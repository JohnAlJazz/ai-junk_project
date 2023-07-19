import { useGlobalContext } from '../context'
import Answers from './Answers'

const Question = () => { 

  return (
   <section className='quiz'>
    <article className='container'>
      <h3>What was the second color of the Chameleon?</h3>
      {<Answers/>}
    </article>
   </section>
  )
}

export default Question
