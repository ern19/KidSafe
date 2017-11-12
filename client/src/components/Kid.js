import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'

class Kid extends Component {

    state = {
        playlists: []
    }

    async componentWillMount() {
        try {
            const kidId = this.props.id
            const res = await axios.get(`kids/${kidId}/playlists`)
            this.setState({playlists: res.data})
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        
        return (
        <div>
            <div><h2>{this.props.nickname}</h2></div>
            <img src={this.props.profile_pic} alt={this.props.name}/>
            this is some text my dude
            <PlaylistList playlists={this.state.playlists} id={this.props.id}/>
        </div>
        );
    }
}

export default Kid;