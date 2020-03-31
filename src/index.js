import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import configStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import { startSetExpenses } from './actions/expenses';
import {firebase} from './firebase/firebase';
import { login, logout } from './actions/Auth';
import {history} from './routers/AppRouter';
import { sortByAmount } from './actions/filters';
const store = configStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
) 

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render( jsx, document.getElementById('root')); 
    hasRendered = true;
  }
}




firebase.auth().onAuthStateChanged( (user) => {
  if(!user) {
    store.dispatch(logout());
    history.push('/');
    console.log('Logged out!!!!!!!');
    renderApp();
  }else {
    console.log(user.uid);
    store.dispatch( login(user.uid) );
    if( history.location.pathname === '/' ){
      history.push("/dashboard");
    }
    store.dispatch(startSetExpenses()).then( () => {      
      renderApp();
    })
  }
} )


ReactDOM.render(<p>Loading...</p>, document.getElementById('root')); 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
