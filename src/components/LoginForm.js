import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from './actions';
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

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}
// b/c we wired up our Action Creator (emailChanged)
// we now have access to a PROP inside our componenet
// named/called -> this.props.emailChanged
export default connect(null, emailChanged)(LoginForm);
