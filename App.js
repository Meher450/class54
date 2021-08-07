import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyButton extends Component {
  displayAlert() {
    alert('Alert');
  }
  render() {
    return <Button color={this.props.color} title={this.props.title} onPress={this.displayAlert} />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <AnyButton color='red' title='click me' />
        <Text>My First React Component</Text>
        <AnyButton color='purple' title="hello" />
      </View>
    );
  }
}