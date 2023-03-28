export const SliderInfo= (props) =>{
    return (
        <div className="slider-info">
            <h2>{props.title}</h2>
            <div className="slider">
                <div className="slider-line" style={{width : String(props.percentage) + "%"}}>{props.percentage}</div>
            </div>
        </div>
    );
}