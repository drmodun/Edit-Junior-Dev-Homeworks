import { useEffect } from "react";
import Question from "./components/Question";
import { QuestionProvider } from "./providers/QuestionProvider";


function App() {

  return (
    <QuestionProvider>
      <Question />
    </QuestionProvider>
  );
}

export default App;
