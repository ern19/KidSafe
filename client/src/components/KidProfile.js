import React, { Component } from 'react';
import axios from 'axios'
import PlaylistList from './PlaylistList'
import {Redirect} from 'react-router-dom'
import NewPlaylistDialog from '../forms/NewPlaylistDialog'
import RaisedButton from 'material-ui/RaisedButton'
import Back from 'material-ui/svg-icons/navigation/arrow-back.js'
class KidProfile extends Component {

    state ={
        kid: {},
        playlists: [],
        redirectToKids: false,
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
        if(window.confirm(`Are you sure you want to delete ${this.state.kid.nickname}'s profile?`)){
            try {
                const kidId = this.props.match.params.id
                const response = await axios.delete(`/kids/${kidId}`)
            this.setState({kid: response.data, redirectToKids:true})
            } catch(error) {
                console.log(error)
            }
        }
    }
    goBack = () => {
        this.setState({redirectToKids:true})
    }
    render() {
    
        if (this.state.redirectToKids) {
            console.log('redirect')
            return (
                <Redirect to={'/kids'}/>
            )
        }
        if(!this.props.amISignedIn){
            return(
                 <Redirect to={'/signUp'}/> 
            )
        }        
        return (
            <div style={{textAlign:'center'}}>
                <Back onClick={this.goBack} style={{float: 'left'}}/>
                
                <h3>{this.state.kid.nickname}'s Playlists</h3>
                    
                <div style={{padding: '3px'}}>
                    <PlaylistList playlists={this.state.playlists} id={this.state.kid.id} getPlaylists={this.getPlaylists}/>
                </div>
                <div>
                    <NewPlaylistDialog id={this.state.kid.id} getPlaylists={this.getPlaylists}/>
                </div>
                <RaisedButton onClick={this.deleteKid} 
                              label={`Delete ${this.state.kid.nickname}`} 
                              backgroundColor="#bb0000" 
                              labelColor='#fff' 
                              style={{margin: '5px'}}/>
                
            </div>
        );
    }
}

export default KidProfile;