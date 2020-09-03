import React, { useRef } from "react";
import "./Login.css";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Button } from "reactstrap";

const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = useSimpleAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleLogin}>
                <fieldset>
                    <label htmlFor="inputUsername"> Username: </label>
                    <input ref={username} type="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password: </label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
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
export default Login;