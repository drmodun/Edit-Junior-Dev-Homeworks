import { useQuestionContext } from "../../providers/QuestionProvider";
import classes from "./Score.module.css";

export const Score = () => {
    const { currentQuestionIndex, amount, difficulty, isActive, currentCorrectlyAnswered} = useQuestionContext();
    return (
        <>
        { isActive ? 
        <div className={classes.Score}>

            <span>
                Difficulty: {difficulty} <br />
                Current Question: {currentQuestionIndex + 1} / {amount}
            </span>
            <span>
                Correct: {currentCorrectlyAnswered}
            </span>

        </div>
        : null}
        </>
    );
}