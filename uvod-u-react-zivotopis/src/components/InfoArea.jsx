export const InfoArea = (props) => {
    return (
        <div className="info-area">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {props.children}
        </div>
    );
}