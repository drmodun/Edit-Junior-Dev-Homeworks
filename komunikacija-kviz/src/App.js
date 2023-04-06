import { useEffect } from "react";
import Question from "./components/Question";
import ContinueButton from "./components/ContinueButton";
import { QuestionProvider } from "./providers/QuestionProvider";
import GameForm from "./components/GameForm";
import Score from "./components/Score";


function App() {

  return (
    <QuestionProvider>
      <h1>Quiz</h1>
      <div className="App">
      <GameForm />
      <div className="question">
      <Question />
      <ContinueButton />
      </div>
      <Score />
      </div>
    </QuestionProvider>
  );
}

export default App;
