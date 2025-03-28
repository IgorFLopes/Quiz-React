import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Option from './Option'

import './Question.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (option) => {
    // console.log(option)
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    })
  }

  // console.log(quizState.help)


  return (
    <div id="question">
      {/* <p>Pergunta 0 de 10</p> */}
      <p id='black'>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      {/* <h2>Pergunta atual</h2> */}
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {/* <p>Opções</p> */}
        {currentQuestion.options.map((option) => (
          <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} hide={quizState.optionToHide === option ? "hide" : null} />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
        {currentQuestion.tip && (
          <button onClick={() => dispatch({ type: "SHOW_TIP" })} type='button'>Dica</button>
        )}
        <button type='button' onClick={() => dispatch({ type: "REMOVE_OPTION" })}>Excluir uma</button>
         
        {/* {quizState.help === 'tip' && <p>{currentQuestion.tip}</p>} */}
        </>
        )}
        {!quizState.answerSelected && quizState.help === 'tip' && <p>{currentQuestion.tip}</p>}
        {quizState.answerSelected && (
          <button type='button' onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
        )}
    </div>
  );
}

export default Question