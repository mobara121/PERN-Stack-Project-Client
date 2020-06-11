import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';


const UserIndex = (props) => {
    return (
      <Container className="userindex">
          <Col>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
          </Col>
      </Container>
    );
}
  
  export default UserIndex;