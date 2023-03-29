import { useEffect } from "react";
import { useState } from "react";
import classes from "./Display.module.css";
import { Info } from "../Info";
export const Display = (props) => {
    const [data, setData] = useState({ ...props });
    const [toAdd, setToAdd] = useState([]);
    //another weird useEffect use case here but I guess it could be used for "security" purposes
    useEffect(() => {
        setToAdd([]);
        for (let key in props) {
            const capitalise = key.charAt(0).toUpperCase() + key.slice(1).toLocaleLowerCase();
            setToAdd(prev => [...prev, {key : capitalise, value : props[key]}])
        }

    }, [props])
    return (
        <div className={classes.Display}>
            <h1>Thank you for your order!</h1>
            {toAdd.map((item, index) => {
                return <Info key={index} name={item.key} value={item.value} />
            })
            }

        </div>
    )
}