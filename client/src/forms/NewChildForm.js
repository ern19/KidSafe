import React, { Component } from 'react';
import axios from 'axios'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
const styles = {
    underlineStyle: {
        borderColor: '#bb0000'
    }
}
class NewChildForm extends Component {

    state = {
        newKid: {
            nickname: '',
            profile_pic: ''
        }
    }

    async componentWillMount() {
    //    await this.props.getKids()
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
            await this.props.getKids()
            console.log('kid made')
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {newKid} = this.state
        return (
            <form style={{padding: '5px'}}>
                <h4>Add Another Child</h4>
                <div>
                    <label htmlFor="nickname">Nickname: </label>
                    <TextField onChange={this.handleChange} 
                               type="text" 
                               name="nickname" 
                               value={newKid.nickname}
                               underlineFocusStyle={styles.underlineStyle}/>
                </div>
                <div>
                    <label htmlFor="profile_pic">Profile Picture: </label>
                    <TextField onChange={this.handleChange} 
                               type="text" 
                               name="profile_pic" 
                               value={newKid.profile_pic}
                               underlineFocusStyle={styles.underlineStyle}/>
                </div>
                <RaisedButton onClick={this.handleSubmit} 
                              label='SUBMIT'
                              backgroundColor='#bb0000' 
                              labelColor='#ffffff'/>
            </form>
        );
    }
}

export default NewChildForm;