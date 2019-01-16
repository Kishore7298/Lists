//Import the library
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create the component
const App = ()=>{
    return (
        <Text>Hello</Text>
    );
}

//Mount the component to the screen
AppRegistry.registerComponent('firstapp', ()=>App);