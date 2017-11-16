import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import KidUpdateDialog from '../forms/KidUpdateDialog'
class Kid extends Component {

    state = {
        playlists: [],
        redirect: false,
        open: false
    }

    openUpdate = () => {
        this.setState({open: !this.state.open})
    }
    render() {
        
        return (
            <Card style={{margin: '8px'}}>
                <CardHeader
                    title={this.props.nickname}
                    avatar={<Avatar
                    src={this.props.profile_pic}
                    size={60}/>}
                >
                </CardHeader>
                {this.state.open ? <KidUpdateDialog 
                                    kid={this.props}
                                    /> : null}
                <CardActions>
                  <RaisedButton
                    containerElement={<Link to={`/kids/${this.props.id}`}/>}
                    label={`View ${this.props.nickname}`}
                    labelColor='#fff'
                    backgroundColor= '#bb0000'
                    style={{margin: '2px'}}>
                  </RaisedButton>
                  <RaisedButton
                    onClick={this.openUpdate}
                    labelColor='#fff'
                    label={`Edit ${this.props.nickname}`}
                    backgroundColor= '#bb0000'
                    style={{margin: '2px'}}>
                  </RaisedButton>
                </CardActions>
                
            </Card>
        );
    }
}

export default Kid;