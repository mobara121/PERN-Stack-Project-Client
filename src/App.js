import React, { useState, useEffect } from 'react';

import './App.css';
// import APIURL from './helpers/environment';
import Header from './home/Navbar';
import UserIndex from './UserIndex/UserIndex';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import Footer from './Footer'

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

  return (

    <div className="Home">
      <h1 className="title-en">Ramen Restaurant</h1>
      <h3 className="title-jp">ラーメン いただきます。</h3> 
      <Header clickLogout={clearToken}/>
      {/* <div className="App"> */}
        {/* <img src={"ramen.png"} alt="ramen"/> */}
        {protectedViews()}
      {/* </div>        */}
      <Footer />
    </div>
  );
}

export default App;
