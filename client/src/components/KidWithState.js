import React, { Component } from 'react';
import axios from 'axios'


class Kid extends Component {

    state = {
        playlists: []
    }

    async componentWillMount() {
        try {
            const kidId = this.props.id
            const res = await axios.get(`kids/${kidId}/playlists`)
            console.log(res.data)
            this.setState({posts: res.data})
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        
        return (
        <div>
            <div><h2>{props.nickname}</h2></div>
            <img src={props.profile_pic}/>
            this is some text my dude
            <PlaylistList playlists={this.state.playlists} id={this.props.id}/>
        </div>
        );
    }
}

export default Kid;