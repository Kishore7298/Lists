//Import the library
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create the component
const App = ()=>{
    return (
        <View>
            <Header headerElement="Albums"/>
            <AlbumList />
        </View>        
    );
}

//Mount the component to the screen
AppRegistry.registerComponent('firstapp', ()=>App);