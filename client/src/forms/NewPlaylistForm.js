import React, { Component } from 'react';
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    underlineStyle: {
        borderColor: '#bb0000'
    }
}
class NewPlaylistForm extends Component {

    state = {
        newPlaylist: {
            name: '',
            embed_URL: ''
        }
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
            await this.props.getPlaylists()
            await this.setState({newPlaylist:{
                name: '',
                embed_URL: ''
            }})
        } catch(error) {
            console.log(error)
        }
    }
    
    render() {
        const {newPlaylist} = this.state
        return (
            <form>
                <h4>Add a Playlist</h4>
                <div>
                    <label htmlFor="name">Playlist Name: </label>
                    <TextField onChange={this.handleChange} underlineFocusStyle={styles.underlineStyle} type="text" name="name" value={newPlaylist.name}/>
                </div>
                <div>
                    <label htmlFor="embed_URL">Playlist URL: </label>
                    <TextField onChange={this.handleChange} underlineFocusStyle={styles.underlineStyle} type="text" name="embed_URL" value={newPlaylist.embed_URL}/>
                </div>
                <RaisedButton onClick={this.handleSubmit} label='SUBMIT' backgroundColor='#bb0000' labelColor='#fff'/>
            </form>
        );
    }
}

export default NewPlaylistForm;