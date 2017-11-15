
import React, { Component } from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'

class PlaylistList extends Component {
    deletePlaylist = async(playlistId) => {
        if(window.confirm(`Are you sure you want to delete this playlist?`)){
            try {
                await axios.delete(`/kids/${this.props.id}/playlists/${playlistId}`)
                this.props.getPlaylists()
            } catch (error) {
                console.log(error)
            }
        }
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {
                    this.props.playlists.map((playlist) => {
                        return(
                            <div key={playlist.id}>
                                <iframe src={playlist.embed_URL}
                                    width="500" 
                                    height="300"
                                    frameBorder="0"
                                    controls="0"
                                    
                                    id={playlist.id}
                                    title="youtube playlist"
                                    >           
                                </iframe>
                                <div>
                                    <RaisedButton onClick={() => this.deletePlaylist(playlist.id)}backgroundColor="#bb0000" labelColor='#fff' style={{margin: '3px'}} label='Delete Playlist'/>
                                </div>
                            </div>
                    )})
                }
            </div>
        );
    }
}

export default PlaylistList;