import { useEffect } from "react";

export const TextInfo = (props) => {
    useEffect(()=>{
        console.log("TextInfo component mounted");
        return () => {
            console.log("TextInfo component unmounted");
        }
    } , [])
    return (
        <div className="text-info">
            <h2 className="category">{props.category}:</h2>
            <p className="information">{props.information}</p>
        </div>
    );
}