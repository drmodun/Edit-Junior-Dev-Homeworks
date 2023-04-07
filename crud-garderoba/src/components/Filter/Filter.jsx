import { useEffect, useState } from "react";
import classes from "../Form/Form.module.css";

export const Filter = ({setFilter}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [size, setSize] = useState("all");
    const [color, setColor] = useState("all");
    const [image, setImage] = useState("");
    
    const update = (e) => {
        console.log(name, price, size, color, image);
        setFilter({name, price, size, color, image});
    }

    const clear = (e) => {
        e.preventDefault();
        setName("");
        setPrice("");
        setSize("all");
        setColor("all");
        setImage("");
    }

    useEffect(() => {
        update();
    }, [name, price, size, color, image]);

    return (
        <form className={classes.Form}>
            <h2>Filter articles</h2>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="price">Maximum Price</label>
            <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="size">Size</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="all">All</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <label htmlFor="color">Color</label>
            <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="all">All</option>
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
            <div>
            <button className={classes.Cancel} onClick ={clear}>Clear Filters</button>
            </div>
            </form>
    )


}