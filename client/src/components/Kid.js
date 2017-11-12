import React from 'react'
import Playlist from './Playlist'
import PlaylistList from './PlaylistList'

const Kid = (props) => {
    console.log(props)
    return (
        <div>
            <div><h2>{props.nickname}</h2></div>
            <img src={props.profile_pic}/>
            this is some text my dude
            <PlaylistList/>
        </div>
    )
}

export default Kid