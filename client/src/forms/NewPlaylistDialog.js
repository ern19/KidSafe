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
export default class NewPlaylistDialog extends React.Component {
  state = {
    open: false,
    newPlaylist: {
        name: '',
        embed_URL: ''
    },
    error: false
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
    const clonedPlaylist = {...this.state.newPlaylist}
    clonedPlaylist[attribute] = event.target.value
    this.setState({newPlaylist: clonedPlaylist})
  }

  handleSubmit = async(event) => {
    event.preventDefault()
    const payload = {
      playlist: this.state.newPlaylist
    }
    try {
      await axios.post(`/kids/${this.props.id}/playlists`, payload)
      await this.handleClose()
      await this.props.getPlaylists()
      await this.setState({newPlaylist: {
          name: '',
          embed_URL: ''
      }})
    } catch (error) {
      this.setState({error:true})
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
        {<RaisedButton label="Add New Playlist" 
                       onClick={this.handleOpen}
                       backgroundColor="#bb0000" 
                       labelColor='#fff' 
                       style={{margin: '5px'}} 
                       />}
        <Dialog
          title='Add New Playlist'
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          <form>
              <div><label htmlFor="name">Name: </label>
              <TextField 
                     onChange={this.handleChange}
                     name="name"
                     type="text"
                     value={this.state.newPlaylist.name}
                     underlineFocusStyle={styles.underlineStyle}/></div>

              <label htmlFor="embed_URL">Embed Link from Youtube: </label>
              <TextField
                     onChange={this.handleChange}
                     name="embed_URL"
                     type="text"
                     value={this.state.newPlaylist.embed_URL}
                     underlineFocusStyle={styles.underlineStyle}/>
          </form>
        {this.state.error ? <div style={{color:'#bb0000'}}>Please fill out the required fields</div> : null}
        </Dialog>
      </div>
    );
  }
}