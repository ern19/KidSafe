import React, { Component } from 'react';
import axios from 'axios'

class NewPlaylistForm extends Component {

    state = {
        newPlaylist: {
            name: '',
            embed_URL: ''
        }
    }

    componentWillMount() {

    }

    handleChange = async(event) => {
        const attribute = event.target.name
        const clonedPlaylist = {...this.state.newPlaylist}
        clonedPlaylist[attribute] = event.target.value
        this.setState({newPlaylist: clonedPlaylist})
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const payload = {
            name: this.state.newPlaylist.name,
            embed_URL: this.state.newPlaylist.embed_URL
        }
        try {
            await axios.post(`/kids/${this.props.id}/playlists`, payload)
        } catch(error) {
            console.log(error)
        }
    }
    render() {
        const {newPlaylist} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Playlist</h4>
                <div>
                    <label htmlFor="name">Playlist Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={newPlaylist.name}/>
                </div>
                <div>
                    <label htmlFor="embed_URL">Playlist URL: </label>
                    <input onChange={this.handleChange} type="text" name="embed_URL" value={newPlaylist.embed_URL}/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewPlaylistForm;