import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.components'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state= {
      currentUser:null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }     
      else{
        this.setState({currentUser:userAuth});
      }
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SigninSignupPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
