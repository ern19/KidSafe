import React from 'react';

const PlaylistList = (props) => {
  
    return (
        <div>
            {
                props.playlists.map((playlist) => {
                    
                    return(
                        <iframe src={playlist.embed_URL}
                            width="640" 
                            height="360"
                            
                            frameBorder="0"
                            >           
                        </iframe>
                )})
            }
        </div>
    );
};

export default PlaylistList;