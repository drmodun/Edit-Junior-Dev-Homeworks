import { Row } from "../Row";
import classes from "./Table.module.css";
export const Table = ({ children }) => {
    return (
        <div className="table">
            <div className={classes.row}>
                <div className={classes.row__image}>
                    Image
                </div>
                <div className={classes.row__name}>
                    <span>Name</span>
                </div>
                <div className={classes.row__size}>
                    <span>Size</span>
                </div>
                <div className={classes.row__color}>
                    <span>Color</span>
                </div>
                <div className={classes.row__price}>
                    <span>Price</span>
                </div>
                <div className={classes.row__actions}>
                    <span>Actions</span>
                </div>
            </div>
            {children}
        </div>
    );
}