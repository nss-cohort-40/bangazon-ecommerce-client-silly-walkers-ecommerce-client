import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Button } from 'reactstrap';
import "./Login.css";


const Register = props => {
    const username = useRef()
    const first_name = useRef()
    const last_name = useRef()
    const email = useRef()
    const address = useRef()
    const phone_number = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const { register } = useSimpleAuth()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "username": username.current.value,
            "first_name": first_name.current.value,
            "last_name": last_name.current.value,
            "email": email.current.value,
            "password": password.current.value,
            "address": address.current.value,
            "phone_number": phone_number.current.value
        }

        register(newUser).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal text-center">Register to use Joe's List</h1>
                <fieldset>
                    <label htmlFor="username">User Name:  </label>
                    <input ref={username} type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter User Name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name: </label>
                    <input ref={first_name} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Enter First Name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name: </label>
                    <input ref={last_name} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Enter Last Name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email: </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Physical Address: </label>
                    <input ref={address} type="text"
                        name="address"
                        className="form-control"
                        placeholder="Enter Address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone_number"> Phone Number: </label>
                    <input ref={phone_number} type="text"
                        name="phone_number"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password: </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password: </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <div className="d-flex flex-wrap justify-content-center">
                        <Button color="success" type="submit" className="m-4">
                            Login
                        </Button>
                    </div>
                </fieldset>
            </form>
        </main>
    )
}
export default withRouter(Register);