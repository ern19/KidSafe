import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import axios from 'axios'

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
  
};

const styles = {
    underlineStyle: {
        borderColor: '#bb0000'
    }
}
/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: false,
    newKid: {
        nickname: '',
        profile: ''
    }
  };

  handleOpen = () => {
    this.setState({open: true});
    console.log(this.props)
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    const attribute = event.target.name
    const clonedKid = {...this.state.newKid}
    clonedKid[attribute] = event.target.value
    this.setState({newKid: clonedKid})
    console.log(this.state.newKid)
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    const payload = {
      kid: this.state.newKid
    }
    try {
      await axios.post('/kids', payload)
      await this.handleClose()
      await this.props.getKids()
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        labelColor='#fff'
        backgroundColor= '#bb0000'
        style={{margin: '2px'}}
      />,
      <RaisedButton
        label="Submit"
        onClick={this.handleSubmit}
        labelColor='#fff'
        backgroundColor= '#bb0000'
        style={{margin: '2px'}}
      />,
    ];

    return (
      <div>
        {<RaisedButton label="Add New Child" 
                       onClick={this.handleOpen}
                       backgroundColor="#bb0000" 
                       labelColor='#fff' 
                       style={{margin: '5px'}} 
                       />}
        <Dialog
          title='Add New Child'
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <form>
              <div><label htmlFor="nickname">Nickname: </label>
              <TextField 
                     onChange={this.handleChange}
                     name="nickname"
                     type="text"
                     value={this.state.newKid.nickname}
                     underlineFocusStyle={styles.underlineStyle}/></div>

              <label htmlFor="profile_pic">Profile Picture: </label>
              <TextField
                     onChange={this.handleChange}
                     name="profile_pic"
                     type="text"
                     value={this.state.newKid.profile_pic}
                     underlineFocusStyle={styles.underlineStyle}/>
          </form>
        </Dialog>
      </div>
    );
  }
}