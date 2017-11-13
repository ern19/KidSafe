import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'
import {Redirect} from 'react-router-dom'


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
        if (!this.props.amISignedIn) {
            <Redirect to="/signUp"/>
        }
        return (
            <div style={{display: 'flex',
                         justifyContent: 'space-between'}}>
                <div>
                    <h3>{this.state.kid.nickname}</h3>
                    <img src={this.state.kid.profile_pic} style={{maxWidth: '100%'}}/>
                </div>   
                <div style={{padding: '10px'}}>
                    <PlaylistList playlists={this.state.playlists}/>
                </div>
            </div>
            
        );
    }
}

export default KidProfile;