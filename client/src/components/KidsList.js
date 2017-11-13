import React from 'react'
import Kid from "./Kid"
import {Redirect} from 'react-router-dom'
const KidsList = (props) => {

    const kids = props.kids.map((kid) => {
        return (
            <Kid {...kid} 
                deleteKid={props.deleteKid} 
                key={kid.id} 
                id={kid.id} 
                />
        )
    })
    return (
        <div>
            
            <h1>Your Kids!</h1>

            {props.kids.length > 0 ? kids : null}
            <button onClick={props.signOut}>Log out</button>
            {props.amISignedIn ? null : <Redirect to="/signUp"/>}
        </div>
       
    )
}

export default KidsList