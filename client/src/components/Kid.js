import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';

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
                    avatar={<Avatar
                        src={this.props.profile_pic}
                        size={60}/>}
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