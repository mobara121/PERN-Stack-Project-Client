import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import UserIndex from './UserIndex/UserIndex';
import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom' ;

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
    <Router>
      <div className="Home">
        <h1 className="title-en">Ramen Restaurant</h1>
        <h3 className="title-jp">ラーメン いただきます。</h3> 
      
        
          <Switch>
            <Route exact path="/info">
              <Navbar clickLogout={clearToken}/>
            </Route>                 
            <Route exact path="/">
            <div className="App">
              <img src={"ramen.png"} alt="ramen"/>
              <UserIndex updateToken={updateToken}/>
              {protectedViews()}
            </div>
            </Route>
          </Switch>
        
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
