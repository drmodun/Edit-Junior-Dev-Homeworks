import { useState } from "react";
import classes from "./Form.module.css";
export const Form = (props) => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [address, setAddress] = useState();
    const [wayOfPayment, setWayOfPayment] = useState("Cash");
    const [isAgreed, setIsAgreed] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email,
            name,
            country,
            address,
            Payment : wayOfPayment,
            isAgreed
        });
        if (!isAgreed) {
            setErrorText("You must agree to terms and conditions");
            return;
        }
        if (name.trim().length < 3) {
            setErrorText("Name must be at least 3 characters long");
            return;
        }
        if (country.trim().length < 3) {
            setErrorText("Country must be at least 3 characters long");
            return;
        }
        if (address.trim().length < 3) {
            setErrorText("Address must be at least 3 characters long");
            return;
        }
        if (email.trim().length < 3) {
            setErrorText("Email must be at least 3 characters long");
            return;
        }

        setErrorText("");
        setAddress("");
        setCountry("");
        setEmail("");
        setName("");
        setWayOfPayment("cash");
        setIsAgreed(false);
        const data = {
            email,
            name,
            country,
            address,
            Payment : wayOfPayment,
        }
        props.changeData(data);
    }
    return (
        <div>
            <h1>Form</h1>
        <form onSubmit={handleSubmit} className={classes.Form}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="country">Country</label>
            <input

                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="wayOfPayment">Way of payment</label>
                <select
                    id="wayOfPayment"
                    value={wayOfPayment}
                    onChange={(e) => setWayOfPayment(e.target.value)}
                >
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="Paypal">Paypal</option>
                </select>
            <div className={classes.Checkbox}>
                <label htmlFor="isAgreed">Agree to terms and conditions</label>
                <input
                    type="checkbox"
                    id="isAgreed"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        <p className={classes.ErrorText}>{errorText}</p>
        </div>

    )

}
