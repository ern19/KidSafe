import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import TextField from 'material-ui/TextField'

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const styles = {
  underlineStyle: {
      borderColor: '#bb0000'
  }
}
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: true,
    kid: {}
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    const attribute = event.target.name
    const clonedKid = {...this.state.kid}
    clonedKid[attribute] = event.target.value
    this.setState({kid: clonedKid})
    console.log(this.state.kid)
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    const payload = {
      kid: this.state.kid
    }
    try {
      await axios.patch(`/kids/${this.props.kid.id}`, payload)
      await this.handleClose()
      await this.props.kid.getKids()
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
        {/* <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} /> */}
        <Dialog
          title={`Edit ${this.props.kid.nickname}`}
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <form>
              <div><label htmlFor="nickname">Nickname: </label>
              <TextField placeholder={this.props.kid.nickname}
                     onChange={this.handleChange}
                     name="nickname"
                     type="text"
                     value={this.state.kid.nickname}
                     underlineFocusStyle={styles.underlineStyle}/></div>
              <label htmlFor="profile_pic">New Profile Picture: </label>
              <TextField placeholder={this.props.kid.profile_pic}
                     onChange={this.handleChange}
                     name="profile_pic"
                     type="text"
                     value={this.state.kid.profile_pic}
                     underlineFocusStyle={styles.underlineStyle}/>
          </form>
        </Dialog>
      </div>
    );
  }
}