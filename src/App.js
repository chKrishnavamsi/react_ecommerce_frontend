import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.components'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signin" component={SigninSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
