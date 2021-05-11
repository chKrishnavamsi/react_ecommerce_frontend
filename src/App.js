import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.components'
import {connect} from 'react-redux'
import Shoppage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser} from './redux/user/users.actions'


class App extends React.Component  {


  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}= this.props;
    this.unSubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
        });
      }     
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SigninSignupPage} />
        </Switch>
      </div>
    );
  }
  
};

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps) (App);
