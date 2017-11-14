import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'
import {Redirect} from 'react-router-dom'
import NewPlaylistForm from '../forms/NewPlaylistForm'

class KidProfile extends Component {

    state ={
        kid: {},
        playlists: [],
        redirectToKids: false,
        updatePlaylists: false
    }

    async componentWillMount() {
        this.getPlaylists()
    }

    getPlaylists = async() => {
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
    deleteKid = async() => {
        try {
          const kidId = this.props.match.params.id
          const response = await axios.delete(`/kids/${kidId}`)
          this.setState({kid: response.data, redirectToKids:true})
        } catch(error) {
            console.log(error)
        }
    }
    render() {
    
        if (this.state.redirectToKids) {
            return (
                <Redirect to={'/kids'}/>
            )
        }
        // if (this.state.updatePlaylists) {
        //     this.getPlaylists()
        // } 
        return (
            <div style={{textAlign:'center'}}>

                <h3>{this.state.kid.nickname}'s Playlists</h3>
                    
                <div style={{padding: '10px'}}>
                        <PlaylistList playlists={this.state.playlists}/>
                </div>
                <div>
                    <NewPlaylistForm id={this.state.kid.id} getPlaylists={this.getPlaylists}/>
                </div>
                <button onClick={this.deleteKid}>{`Delete ${this.state.kid.nickname}`}</button>
            </div>
        );
    }
}

export default KidProfile;