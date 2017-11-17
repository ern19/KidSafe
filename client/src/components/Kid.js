import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar';
import KidUpdateDialog from '../forms/KidUpdateDialog'
import Edit from 'material-ui/svg-icons/image/edit'

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
            <Card style={{margin: '8px', zIndex: '-1'}}>
                <CardHeader
                    title={this.props.nickname}
                    style={{fontSize: '20px'}}
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

                  <div onClick={this.openUpdate} style={{float: 'right',margin:'3px', zIndex:'1000'}}><Edit /></div>
                </CardActions>
                
            </Card>
        );
    }
}

export default Kid;