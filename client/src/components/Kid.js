import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {Redirect} from 'react-router-dom'

class Kid extends Component {

    state = {
        playlists: [],
        redirect: false
    }

    render() {
        
        return (
            <Card style={{margin: '8px'}}>
                <CardHeader
                    title={this.props.nickname}
                    avatar={this.props.profile_pic}
                >
                </CardHeader>
                <CardActions>
                  <RaisedButton
                    containerElement={<Link to={`/kids/${this.props.id}`}/>}
                    labelColor='#fff'
                    label={`View ${this.props.nickname}`}
                    backgroundColor= '#bb0000'
                    style={{margin: '2px'}}>
                  </RaisedButton>
                </CardActions>
                
            </Card>
        );
    }
}

export default Kid;