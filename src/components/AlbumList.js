import React from 'react';
import axios from 'axios';
import { View } from 'react-native';

import AlbumDetail from './AlbumDetail';

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
        return this.state.albumData.map( album => <AlbumDetail key={album.title} album={album}/>)
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