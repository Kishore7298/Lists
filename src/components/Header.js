//Import the libraries
import React from 'react';
import { Text, View } from 'react-native';
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
const styles = {
    textHeader:{
        fontSize:20,
        fontFamily:"asap"
    },
    viewStyle:{
        backgroundColor:"#F8F8F8",
        justifyContent:'center',
        alignItems:'center',
        height:60,
        elevation:2,   
    }
}


//make the component available to other modules
export default Header;