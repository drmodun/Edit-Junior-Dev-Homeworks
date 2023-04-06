import { useQuestionContext } from "../../providers/QuestionProvider";
import classes from "./Button.module.css";

export const ContinueButton = () => {
    const { updateQuestion, canMove, isActive} = useQuestionContext();
    return (
        <div>
        {!canMove || !isActive ? null :
        <button
            className={classes.Button}
            onClick={() => {
                updateQuestion();
            }}
        >
            Next Question
        </button>
        }
        </div>
    );
}