import { useEffect } from "react";
import Question from "./components/Question";
import ContinueButton from "./components/ContinueButton";
import { QuestionProvider } from "./providers/QuestionProvider";
import GameForm from "./components/GameForm";
import Score from "./components/Score";


function App() {

  return (
    <QuestionProvider>
      <GameForm />
      <Question />
      <ContinueButton />
      <Score />
    </QuestionProvider>
  );
}

export default App;
