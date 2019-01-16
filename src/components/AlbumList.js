import React from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';

class AlbumList extends React.Component {
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response)=>{
                console.log(response);
            })
    }
    render(){
        return (
            <View>
                <Text>This is album list!!</Text>
            </View>
        )
    }
}

export default AlbumList;