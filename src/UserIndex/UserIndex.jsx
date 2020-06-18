import React from 'react';

import styled from 'styled-components';
import Signup from './Signup';
import Login from './Login';

// import norenPic from '../assets/publicdomainq-0017979qhtovi.png';
import ramenPic from '../assets/ramen.png'

const Image = styled.img`
width: 100%;
height: 40%;
margin: 30px auto;
padding:0 auto;
`;

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;

const Div = styled.div`
    flex-direction: column;
    margin: 0 40px;
    padding: 0 40px;
`;

const UserIndex = (props) => {
    return (
        <Wrapper>
            <Div className='signinLogin'>
                <Image src={ramenPic} alt="ramen" />
                <Signup updateToken={props.updateToken}/>
                <Login updateToken={props.updateToken}/>
            </Div>
      </Wrapper>
    );
}
  
  export default UserIndex;