import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCCThgSP0AsAQSNAuQbLGyS3iOSCrbigrE',
      authDomain: 'manager-ee97e.firebaseapp.com',
      databaseURL: 'https://manager-ee97e.firebaseio.com',
      projectId: 'manager-ee97e',
      storageBucket: 'manager-ee97e.appspot.com',
      messagingSenderId: '800392028030'
    };
    firebase.initializeApp(config);
  }

  // LifeCycle Method #1
  render() {
    return(
      <Provider store={ createStore(reducers) }>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
