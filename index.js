//Import the library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header'

//Create the component
const App = ()=>{
    return (
        <Header headerElement="Albums"/>
    );
}

//Mount the component to the screen
AppRegistry.registerComponent('firstapp', ()=>App);