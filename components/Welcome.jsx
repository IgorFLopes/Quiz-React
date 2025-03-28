
import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Quiz from "../img/quiz.svg"

import "../components/Welcome.css"

const Welcome = () => {
  // dispatch é para conseguir acessar o Swite, entrar no reducer. "quizState eu pego os valores" e o "dispatch eu altero os valores"
  const [quizState, dispatch] = useContext(QuizContext)

  // console.log(quizState)

  return (
    <div id="welcome">
        <h2>Seja bem-vindo !</h2>
        <img src={Quiz} alt="Inicio do Quiz" />
        <p>Clique no botão abaixo para começar:</p>
        <button type="button" onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome