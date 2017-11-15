
import React, { Component } from 'react';
import axios from 'axios'

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
                        console.log(playlist.id)
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
                                <button onClick={() => this.deletePlaylist(playlist.id)}></button>
                            </div>
                    )})
                }
            </div>
        );
    }
}

export default PlaylistList;