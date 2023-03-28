import { useEffect } from "react";

export const TextInfo = (props) => {
    return (
        <div className="text-info">
            <h2 className="category">{props.category}:</h2>
            <p className="information">{props.information}</p>
        </div>
    );
}