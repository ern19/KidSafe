import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'
import {Redirect} from 'react-router-dom'


class KidProfile extends Component {

    state ={
        kid: {},
        playlists: [],
        redirectToKids: false
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
    deleteKid = async() => {
        try {
          const kidId = this.props.match.params.id
          const response = await axios.delete(`/kids/${kidId}`)
          await this.setState({redirectToKids:true})
        } catch(error) {
            console.log(error)
        }
    }
    render() {
        if (!this.props.amISignedIn) {
            <Redirect to="/signUp"/>
        }
        if (this.state.redirectToKids) {
            return (
                <Redirect to={'/kids'}/>
            )
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
                <button onClick={this.deleteKid}>{`Delete ${this.props.nickname}`}</button>

            </div>
            
        );
    }
}

export default KidProfile;