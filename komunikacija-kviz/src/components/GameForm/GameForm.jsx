import { useQuestionContext } from "../../providers/QuestionProvider"
import classes from "./Form.module.css";
export const GameForm = () => {
    const { setGameSettings, toggleIsActive, isActive} = useQuestionContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = e.target.amount.value;
        const category = e.target.category.value;
        const difficulty = e.target.difficulty.value;
        setGameSettings(amount, category, difficulty);
        toggleIsActive();
    }
    return (
        <>
        { isActive ? null :
        <div className={classes.FormContainer}>
            <form onSubmit={handleSubmit} className={classes.Form}>
                <span className={classes.FormTitle} onClick={toggleIsActive}>Game Settings</span>
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" min="1" max="50" defaultValue="9" />
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="9">General Knowledge</option>
                    <option value="10">Books</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="13">Musicals &amp; Theatres</option>
                    <option value="14">Television</option>
                    <option value="15">Video Games</option>
                    <option value="16">Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Computers</option>
                    <option value="19">Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Comics</option>
                    <option value="30">Gadgets</option>
                    <option value="31">Japanese Anime &amp; Manga</option>
                    <option value="32">Cartoon &amp; Animations</option>
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