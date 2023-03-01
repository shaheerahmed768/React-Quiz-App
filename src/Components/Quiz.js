import React, {useContext, useState} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank'
function Quiz() {

  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () =>{
    if(Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if(Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  }

  return (
    <div className="Quiz">
      <h2>{Questions [currQuestion].prompt}</h2>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}> {Questions [currQuestion].option_A} </button>
        <button onClick={() => setOptionChosen("B")}> {Questions [currQuestion].option_B} </button>
        <button onClick={() => setOptionChosen("C")}> {Questions [currQuestion].option_C} </button>
        <button onClick={() => setOptionChosen("D")}> {Questions [currQuestion].option_D} </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish </button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Quiz