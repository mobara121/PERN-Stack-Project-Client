import React, { useState, useEffect } from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Header from './home/Navbar';
import norenPic from './assets/publicdomainq-0017979qhtovi.png';
import UserIndex from './UserIndex/UserIndex';
import styled from 'styled-components'
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';


function App() {
  const [sessionToken, setSessionToken] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token')? <RestaurantInfo token={sessionToken}/> : <UserIndex updateToken={updateToken}/>)
  }

  const NorenPic = styled.img`
      width: 40%;
      padding-top: 30px;
      display: flex;
      justify-content: center;
      margin: 0 auto;

  `;

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);



  return (

    <div className="Home">
      <Header clickLogout={clearToken}/>
      <ThemeProvider theme={theme}>
      <Typography variant="h1" className="title-en" >Ramen Restaurant</Typography>
      <Typography variant="h3" className="title-jp">ラーメン いただきます。</Typography>     
      </ThemeProvider>
      <NorenPic src={norenPic} alt="#"/>
        {protectedViews()}
    </div>
    
  );
}

export default App;
