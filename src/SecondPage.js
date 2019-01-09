import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.goBackHome = this.goBackHome.bind(this);
  }
  goBackHome(){
    console.log('going to home page');
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>This is the SecondPage</Text>
        <Button 
          onPress={this.goBackHome}
          title={'Go to HomePage'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
