import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Rammus from "../img/rammus_ok.png"
import "./GameOver.css"


const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="gameover">
        <h2>End Game</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Rammus} alt="fim do quiz" />
        <button onClick={() =>dispatch({ type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver