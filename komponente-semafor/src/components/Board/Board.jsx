import { useState } from "react";
import classes from './Board.module.css';
export const Board = (props) => {
    const [first, setFirst] = useState(props.homeScore);
    const [second, setSecond] = useState(props.awayScore);
    const [minute, setMinute] = useState(props.minute);

    const handleFirst = () => {
        if (minute === 90) return;
        setFirst(prev => prev + 1);
        props.handleScoreUpdate({ minute: minute, changed: 1 });
    }
    const handleSecond = () => {
        if (minute === 90) return;
        setSecond(prev => prev + 1);
        props.handleScoreUpdate({ minute: minute, changed: 2 });
    }
    const handleUndoFirst = () => {
        if (minute === 90) return;
        if (first === 0) return;
        setFirst(prev => prev - 1);
        props.handleUndo(1);
    }
    const handleUndoSecond = () => {
        if (minute === 90) return;
        if (second === 0) return;
        setSecond(prev => prev - 1);
        props.handleUndo(2);
    }

    const handleReset = () => {
        setFirst(0);
        setSecond(0);
        props.handleReset();
    }

    return (
        <div className={classes.Board}>
            <div className={classes.Date}>
                <h2>{props.date}</h2>
            </div>
            <div className={classes.Score}>
                <div className={classes.First}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
                        alt="Liverpool"
                        width="50px"
                        height="50px"
                    />
                    <h2>{first}</h2>
                </div>
                <div className={classes.Second}>
                    <h2>{second}</h2>
                    <img
                        //find a source for the image of Arsenal

                        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png"
                        alt="Arsenal"
                        width="50px"
                        height="50px"
                    />
                </div>
            </div>
            <div className={classes.Buttons}>
                <button onClick={() => handleFirst()}>+</button>
                <button onClick={() => handleUndoFirst()}>-</button>
                <button onClick={() => handleSecond()}>+</button>
                <button onClick={() => handleUndoSecond()}>-</button>
            </div>
            <div className={classes.Minute}>
                <h2>Minute: {minute}</h2>
                <button onClick={() => setMinute(prev => prev < 90 ? prev += 1 : prev)}>+</button>
                <button onClick={() => setMinute(prev => prev > 0 ? prev -= 1 : prev)}>-</button>
            </div>
        </div>
    );

}