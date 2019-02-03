import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props)=>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}
const styles = StyleSheet.create({
    containerStyle:{
        borderWidth:1,
        borderColor:"#ddd",
        borderRadius:2,
        borderBottomWidth:0,
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginTop:10,
        marginRight:5,
        marginLeft:5,
        padding:10

    }
})

export default Card;