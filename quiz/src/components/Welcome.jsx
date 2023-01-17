import "./Welcome.css"
import Morgana from "../img/MorgImage-removebg-preview.png"
import { useContext } from "react"
import { QuizContext } from "../context/quiz"


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar:</p>
        <button onClick={() =>dispatch({type: "CHANGE_STATE" })}>Iniciar</button>
        <img src={Morgana} alt="Inicio do quiz"/>
    </div>
  )
}

export default Welcome 