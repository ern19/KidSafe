import React, { Component } from 'react';

class Playlist extends Component {
    render(props) {
        return (
            <iframe id="existing-iframe-example"
                    width="640" height="360"
                    src={props.plyalist}
                    frameborder="0"
                    style="border: solid 4px #37474F">
           </iframe>
        );
    }
}

export default Playlist;