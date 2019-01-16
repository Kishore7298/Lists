import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View, TextInput} from 'react-native';
import { black } from 'ansi-colors';

export default class App extends Component {
  state = {
    textValue:''
  };
  namechanged = event =>{
    this.setState({
      textValue:event,
    })
  
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput style={styles.inputText} placeholder="An awesome Input" value={this.state.textValue} onChangeText={this.namechanged} />
          <Button title="Add"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textContainer:{
    width:"100%",
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  inputText :{
    width:"70%",
  },
  inputButton:{
    width:"30%"
  }
  
});
