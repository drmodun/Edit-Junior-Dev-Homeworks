import classes from './Row.module.css';
export const Row = ({ article }) => {
    return (
        <div className={classes.row}>
            <div className={classes.row__image}>
                <img src={article.image} alt={article.name} />
            </div>
            <div className={classes.row__name}>
                <span>{article.name}</span>
            </div>
            <div className={classes.row__size}>
                <span>{article.size}</span>
            </div>
            <div className={classes.row__color}>
                <span>{article.color}</span>
            </div>
            <div className={classes.row__price}>
                <span>{article.price}</span>
            </div>
            <div className={classes.row__button}>
                <button>Edit</button>
            </div>
        </div>
    )


}
