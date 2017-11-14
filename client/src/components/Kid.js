import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import {FlatButton} from 'material-ui/FlatButton'
import {Redirect} from 'react-router-dom'

class Kid extends Component {

    state = {
        playlists: [],
        redirect: false
    }

    render() {
        
        return (
            <Card style={{margin: '0 auto'}}>
                <CardHeader
                    title={this.props.nickname}
                    avatar={this.props.profile_pic}
                >
                </CardHeader>
                <CardActions>
                    <Link to={`/kids/${this.props.id}`}>{`View ${this.props.nickname}`}</Link>
                </CardActions>
                
            </Card>
        );
    }
}

export default Kid;