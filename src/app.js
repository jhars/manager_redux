import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCCThgSP0AsAQSNAuQbLGyS3iOSCrbigrE',
      authDomain: 'manager-ee97e.firebaseapp.com',
      databaseURL: 'https://manager-ee97e.firebaseio.com',
      projectId: 'manager-ee97e',
      storageBucket: 'manager-ee97e.appspot.com',
      messagingSenderId: '800392028030'
    }
    firebase.initializeApp(config);
  }

  // LifeCycle Method #1

  // Adding New Argument into CreateSotre(A, B)...
    // 2nd Argument is Any Initial State wwe wanted to send to ur applications
    // Applicable to serverside rendering
    //could be a pre-filled form, etc.
      // applyMiddleware => STORE ENHANCER (b/c adding addtional functionality to store)

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
