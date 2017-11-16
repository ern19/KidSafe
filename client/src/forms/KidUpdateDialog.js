import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
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
      await this.handleClose
      await this.props.kid.getKids()
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
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
              <input placeholder={this.props.kid.nickname}
                     onChange={this.handleChange}
                     name="nickname"
                     type="text"
                     value={this.state.kid.nickname}/></div>
              <label htmlFor="profile_pic">New Profile Picture: </label>
              <input placeholder={this.props.kid.profile_pic}
                     onChange={this.handleChange}
                     name="profile_pic"
                     type="text"
                     value={this.state.kid.profile_pic}/>
          </form>
        </Dialog>
      </div>
    );
  }
}