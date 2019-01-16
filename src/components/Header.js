//Import the libraries
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { asap } from 'rsvp';


//create the component
const Header = (props)=>{
    const { textHeader, viewStyle } = styles;
    return (
        <View style={ viewStyle }>
            <Text style={ textHeader }>{props.headerElement}</Text>
        </View>
    )
}

//to add styles to the component, we do that using styles object
const styles = StyleSheet.create({
    textHeader:{
        fontSize:20,
        fontFamily:"Asap-Regular"
    },
    viewStyle:{
        backgroundColor:"#F8F8F8",
        justifyContent:'center',
        alignItems:'center',
        height:60,
        elevation:2,
        fontFamily:"asap"   
    }
})


//make the component available to other modules
export default Header;