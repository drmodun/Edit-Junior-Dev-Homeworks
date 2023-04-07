import { useEffect, useState } from "react";
import classes from "./Form.module.css";
import { ArcticleOfClothing } from "../../data"; 
import { v4 as uuidv4 } from "uuid";
export const Form = ({addArticle, currentArticle, cancelEdit}) => {
    const [name, setName] = useState(currentArticle ? currentArticle.name : "");
    const [price, setPrice] = useState( currentArticle ? currentArticle.price :"");
    const [size, setSize] = useState( currentArticle ? currentArticle.size :"S");
    const [color, setColor] = useState( currentArticle ? currentArticle.color :"red");
    const [image, setImage] = useState( currentArticle ? currentArticle.image :"");
    const [error, setError] = useState("");

    useEffect(() => {
        if (currentArticle) {
            setName(currentArticle.name);
            setPrice(currentArticle.price);
            setSize(currentArticle.size);
            setColor(currentArticle.color);
            setImage(currentArticle.image);
        } else {
            setName("");
            setPrice("");
            setSize("S");
            setColor("red");
            setImage("");
        }
    }, [currentArticle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, size, color, image);
        if (!name.trim() || !size.trim() || !color.trim() || !image.trim()) {
            setError("Please fill in all fields");
            return;
        }
        if (isNaN(price) || price < 0) {
            setError("Please enter a valid price");
            return;
        }
        const confim = window.confirm("Are you sure you want to submit?");
        const newArticle = new ArcticleOfClothing( currentArticle ? currentArticle.id : uuidv4(), name, price, size, color, image);
        console.log(newArticle);
        if (!confim) {
            return;
        }
        e.preventDefault();
        setName("");
        setPrice("");
        setSize("S");
        setColor("red");
        setError("");
        setImage("");
        addArticle(currentArticle ? {newArticle, id: currentArticle.id} : {newArticle});
        cancelEdit();
    };

    return (
        <form className={classes.Form} onSubmit={handleSubmit}>
            <h2>{currentArticle ? "Edit" : "Add"} Article</h2>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="price">Price</label>
            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="size">Size</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <label htmlFor="color">Color</label>
            <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="orange">Orange</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="brown">Brown</option>
                <option value="grey">Grey</option>
            </select>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
            <button type="submit">{!currentArticle ? "Add" : "Edit"}</button>
            {
                currentArticle && <div> <button type="button" className={classes.Cancel} onClick={cancelEdit}>Cancel</button> </div>
            }
            <p className={classes.Error}>{error}</p>
        </form>
    );
}