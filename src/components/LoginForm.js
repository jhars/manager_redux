import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

//import connect helper
//import action creator
// Hook it up to our componnent with the connect helper

class LoginForm extends Component {
  onEmailChange(text) {
    //call an action creator so we can update
    //our application level state
    //with the new value that the user has typed in

    //this is behaing the exact same way as when wer were using our
    // setState() call before
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onPasswordChange(text) {
    // looks like this is where define the variable name- passwordChanged
    this.props.passwordChanged(text);
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  //is specifically 'auth'
  // b/c that is the value that we assigned our reducer to
  // in our combiedReducers call// in the reducers/index.js file
  // our reducer is what is actually producing this 'email' property

  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }; // we can probably destructure above...
};

// b/c we wired up our Action Creator (emailChanged)
// we now have access to a PROP inside our componenet
// named/called -> this.props.emailChanged
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
