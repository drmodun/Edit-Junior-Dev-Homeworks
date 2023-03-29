import { useState } from "react";
import classes from './Statistic.module.css';
export const Statistic = (props) => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    return (
        <div className={classes.statistic}>
            <div className={classes.first}>
                <button onClick={() => setFirst(prev => prev >= 0 ? prev + 1 : 0)}>+</button>
                <button onClick={() => setFirst(prev => prev > 0 ? prev - 1 : 0)}>-</button>
                <h2>{first}</h2>
            </div>
            {props.title}
            <div className={classes.second}>
                <h2>{second}</h2>
                <button onClick={() => setSecond(prev => prev >= 0 ? prev + 1 : 0)}>+</button>
                <button onClick={() => setSecond(prev => prev > 0 ? prev - 1 : 0)}>-</button>
            </div>
        </div>
    );


}