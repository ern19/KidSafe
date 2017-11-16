import React from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const About = () => {
    return (
        <div>
           <h2>Take the power back!</h2>
           <p>Here at KidSafe, we want to allow parents to give their children meaningful
               educational experiences with streaming content from YouTube, without the fear of accidentally exposing them to 
               disturbing content that often gets through YouTube's content filters.</p> 
           <h2>You control the content!</h2>
           <p>By using embedded playlists technology that YouTube offers, KidSafe allows you to only watch content from providers you
               trust, or by making your own playlists with content that you want your child to watch!
           </p>
           <h2>Take the fear out of streaming.</h2>
           <p>Since you know exactly what your child is watching, you can rest assured that they aren't just watching mind-numbing content; instead, 
               you can make sure that their screen-time is always productive. Click below to find some resources to get started.
           </p>
           <RaisedButton containerElement={<Link to='/recommended'/>}
                         label="Start here"
                         backgroundColor= '#bb0000'  
                         labelColor='#fff'
                         style={{margin: '5px'}}/>
        </div>
    );
};

export default About;