import React from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';

class AlbumList extends React.Component {
    
    state={
        albumData:[]
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response)=>{
                this.setState({albumData:response.data})
            })
    }
    renderAlbums(){
        return this.state.albumData.map( album => <Text>{album.title}</Text>)
    }
    render(){
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;