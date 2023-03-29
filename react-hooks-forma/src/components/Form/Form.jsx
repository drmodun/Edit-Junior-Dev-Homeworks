import { useState } from "react";
import classes from "./Form.module.css";
export const Form = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [address, setAddress] = useState();
    const [wayOfPayment, setWayOfPayment] = useState();
    const [isAgreed, setIsAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email,
            name,
            country,
            address,
            wayOfPayment,
            isAgreed
        });
    }
    return (
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
            <div>
                <label htmlFor="address">Address</label>
                <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="wayOfPayment">Way of payment</label>
                <select 
                id="wayOfPayment"
                value={wayOfPayment}
                onChange={(e) => setWayOfPayment(e.target.value)}
                >
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="paypal">Paypal</option>
                </select>
            </div>
            <div>
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
    )

}
