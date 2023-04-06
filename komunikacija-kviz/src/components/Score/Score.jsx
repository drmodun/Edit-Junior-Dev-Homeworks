import { useQuestionContext } from "../../providers/QuestionProvider";
import classes from "./Score.module.css";

export const Score = () => {
    const { correctAnswers, currentQuestionIndex, amount, category, difficulty } = useQuestionContext();
    return (

        <div className={classes.Score}>

            <h1>
                Category: {category} <br />
                Difficulty: {difficulty} <br />
                {currentQuestionIndex + 1} / {amount}
            </h1>
            <h1>
                {correctAnswers}
            </h1>

        </div>
    );
}