import React, { Component } from 'react';
import Kid from "./Kid"
import {Redirect} from 'react-router-dom'
import NewChildDialog from '../forms/NewChildDialog'

class KidsList extends Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    render() {
        const kids = this.props.kids.map((kid) => {
            return (
                <Kid {...kid} 
                    deleteKid={this.props.deleteKid} 
                    key={kid.id} 
                    id={kid.id} 
                    getKids={this.props.getKids}
                    />
            )
        })
        return (
            <div>
                
                <h2 style={{textAlign: 'center'}}>Your Kids!</h2>
    
                {this.props.kids.length > 0 ? kids : null}
                {this.props.amISignedIn ? null : <Redirect to="/signUp"/>}
                {this.handleOpen ? <NewChildDialog getKids={this.props.getKids} open={this.state.open}/> : null}
                
            </div>
           
        )
    }
}

export default KidsList;

