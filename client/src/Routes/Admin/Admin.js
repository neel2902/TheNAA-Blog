import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Dashboard from "./Dashboard";
const bcrypt = require('bcryptjs');
const hash = '$2y$10$Yh8p6QCBk.piJIE8ElxKM.Oj.2ue9/4D1jVaMppmKnx90BXmjurn2';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showdashboard, setShowdashboard] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await bcrypt.compare(password, hash);
        console.log(result);
        if (name === 'admin' && result) {
            setShowdashboard(true);
        }
        else {
            alert("Incorrect username or password, try again!");
        }
    }

    return (
        !showdashboard ?
            <div style={{ width: '300px', margin: '3em auto' }}>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="text" bsSize="large">
                        <label>Name</label>
                        <FormControl
                            autoFocus
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" type="submit">
                        Login
                </Button>
                </form>
            </div> :
            <Dashboard />
    );
}

export default Login;