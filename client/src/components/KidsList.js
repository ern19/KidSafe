import React from 'react'
import Kid from "./Kid"

const KidsList = (props) => {

    const kids = props.kids.map((kid) => {
        console.log(kid)
        return (
            <Kid {...kid} 
                deleteKid={props.deleteKid} 
                key={kid.id} 
                id={kid.id} 
                playlists={kid.playlists}/>
        )
    })
    return (
        <div>
            
            <h1>Your Kids!</h1>

            {props.kids.length > 0 ? kids : null}
            <button onClick={props.signOut}>Log out</button>
            
        </div>
    )
}

export default KidsList