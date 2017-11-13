import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'

class KidProfile extends Component {

    state ={
        kid: {},
        playlists: []
    }

    async componentWillMount() {
        try {
            const res = await axios.get(`/kids/${this.props.match.params.id}`)
            this.setState({kid: res.data})
        } catch (error) {
            console.log(error)
        }
        try {
            const res = await axios.get(`/kids/${this.props.match.params.id}/playlists`)
            this.setState({playlists: res.data})
        } catch (error) {
            
        }
    }
    render() {
        return (
            <div>
                {this.state.kid.nickname}
                <PlaylistList playlists={this.state.playlists}/>
            </div>
        );
    }
}

export default KidProfile;