import { useQuestionContext } from "../../providers/QuestionProvider"
import classes from "./Form.module.css";
export const GameForm = () => {
    const { setGameSettings, toggleIsActive, isActive, categoryDictionary} = useQuestionContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const category = e.target.category.value;
        const difficulty = e.target.difficulty.value;
        if (!amount && amount!==0 || amount < 1 || amount > 50) {
            alert("Please enter a number between 1 and 50");
            return;
        }
        console.log(amount, category, difficulty);
        setGameSettings(amount, category, difficulty);
        toggleIsActive();
    }
    return (
        <>
        { isActive && categoryDictionary!=={} ? null :
        <div className={classes.FormContainer}>
            <form onSubmit={handleSubmit} className={classes.Form}>
                <span className={classes.FormTitle} onClick={toggleIsActive}>Game Settings</span>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" min="1" max="50" defaultValue="9" />
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    {categoryDictionary && Object.keys(categoryDictionary).map((key) => (
                        <option key={key} value={key}>{categoryDictionary[key]}</option>
                    ))
                    }
                </select>
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button type="submit">Start</button>
            </form>
        </div>
        }
        </>
    );
}