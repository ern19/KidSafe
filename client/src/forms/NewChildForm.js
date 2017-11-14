import React, { Component } from 'react';
import axios from 'axios'

class NewChildForm extends Component {

    state = {
        newKid: {
            nickname: '',
            profile_pic: ''
        }
    }

    async componentWillMount() {
       await this.props.getKids()
    }
    handleChange = async(event) => {
        const attribute = event.target.name
        const clonedKid = {...this.state.newKid}
        clonedKid[attribute] = event.target.value
        this.setState({newKid: clonedKid})
        console.log(this.state.newKid)
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const payload = {
            nickname: this.state.newKid.nickname,
            profile_pic: this.state.newKid.profile_pic
        }
        try {
            await axios.post('/kids', payload)
            console.log(this.props)
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {newKid} = this.state
        return (
            <form onSubmit={this.handleSubmit} style={{padding: '5px'}}>
                <h4>Add Another Child</h4>
                <div>
                    <label htmlFor="nickname">Nickname: </label>
                    <input onChange={this.handleChange} type="text" name="nickname" value={newKid.nickname}/>
                </div>
                <div>
                    <label htmlFor="profile_pic">Profile Picture: </label>
                    <input onChange={this.handleChange} type="text" name="profile_pic" value={newKid.profile_pic}/>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewChildForm;