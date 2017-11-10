import React from 'react'

const Kid = (props) => {
    return (
        <div>
            <div><h2>{props.nickname}</h2></div>
            <img src={props.profile_pic}/>
            this is some text my dude
        </div>
    )
}

export default Kid