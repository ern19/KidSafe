import React from 'react'
import Kid from "./Kid"
import {Redirect} from 'react-router-dom'
import NewChildForm from '../forms/NewChildForm'
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
            {props.amISignedIn ? null : <Redirect to="/signUp"/>}
            
            <NewChildForm getKids={props.getKids}/>
        </div>
       
    )
}

export default KidsList