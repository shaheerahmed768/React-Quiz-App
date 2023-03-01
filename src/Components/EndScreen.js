import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'
import "../App.css" 

function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext);

  const restart = ()=> {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className='EndScreen'>
      <h1>Thank You For Playing.</h1>
      <h3> {score} out of {Questions.length} </h3>
      <button onClick={restart}> Replay </button>
    </div>
  )
}

export default EndScreen