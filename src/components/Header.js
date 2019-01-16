//Import the libraries
import React from 'react';
import { Text } from 'react-native';


//create the component
const Header = ()=>{
    const { textHeader } = styles;
    return (
        <Text style={ textHeader }>This is Header</Text>
    )
}

//to add styles to the component, we do that using styles object
const styles = {
    textHeader:{
        fontSize:20
    }
}


//make the component available to other modules
export default Header;