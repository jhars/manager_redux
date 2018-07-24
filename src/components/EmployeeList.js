import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
    //now... the (last) thing we have to do...
    // is add a new reducer to receive this list of employees
    //sol purpose of holding our list of emplpyees that are active for this user
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
