import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return name.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            var myHeaders = new Headers();
            var formdata = new FormData();
            formdata.append("name", "admin");
            formdata.append("secret", "I@am@admin@07");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://localhost:5000/login", requestOptions)
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div style={{ width: '300px', margin: '3em auto' }}>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="text" bsSize="large">
                    <label>Name</label>
                    <FormControl
                        autoFocus
                        type="text"
                        value="admin"
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <label>Password</label>
                    <FormControl
                        value="I@am@admin@07"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}