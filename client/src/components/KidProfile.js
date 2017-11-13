import React, { Component } from 'react';
import axios from 'axios'
class KidProfile extends Component {

    state ={
        kid: {}
    }

    async componentWillMount() {
        try {
            const res = await axios.get(`/kids/${this.props.match.params.id}`)
            this.setState({kid: res.data})
            console.log(this.props.match)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                {this.state.kid.nickname}
            </div>
        );
    }
}

export default KidProfile;