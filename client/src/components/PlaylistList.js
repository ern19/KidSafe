import React from 'react';

const PlaylistList = (props) => {
  
    return (
        <div>
            {
                props.playlists.map((playlist) => {
                    console.log(playlist.id)
                    return(
                        <iframe src={playlist.embed_URL}
                            width="500" 
                            height="300"
                            frameBorder="0"
                            controls="0"
                            key={playlist.id}
                            id={playlist.id}
                            title="youtube playlist"
                            >           
                        </iframe>
                )})
            }
        </div>
    );
};

export default PlaylistList;