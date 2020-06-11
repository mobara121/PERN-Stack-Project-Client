import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Link} from 'react-router-dom'


const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({user: {username: username, password:password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response)=> response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }


    return (
      <div className="Signup">
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                        <Input onChange={(e) => setUsername(e.target.value)} className="username" name="username" value={username}></Input>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} className="password" name="password" value={password}></Input>
                </FormGroup>
                <Link to="/info"><Button className="userindex-btn" type="submit">Signup</Button></Link>
            </Form>
      </div>
    );
  }
  
export default Signup;