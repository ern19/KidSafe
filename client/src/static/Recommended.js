import React from 'react';

const Recommended = () => {
    return (
        <div>
            <h1>How to get started</h1>
            <ul>
                <p>1. After you login, add your child to your account.</p>
                <p>2. After you add your child, add a playlist from the list below, or add your own. </p>
            </ul>
            <ul>
                <li><a href='https://www.youtube.com/embed/videoseries?list=PLV3Gd8vEgOrgqCqL-veZ4xl0HJ90acdZD&amp;showinfo=0'>Hoopla Kids, for younger kids learning shapes and colors</a></li>
                <br/>
                <li><a href='https://www.youtube.com/embed/videoseries?list=PLa8HWWMcQEGQy2ih09GXTor3UZFHZM9BJ&amp;showinfo=0'>GPB Kids</a></li>
                <br/>
                <li><a href='https://www.youtube.com/embed/videoseries?list=PLQlnTldJs0ZQs96D-U6o1Jcy4O-k5zqyy&amp;showinfo=0'>National Geographic Kids</a></li>
                <br/>
                <li><a href='https://www.earlychildhoodeducationzone.com/most-educational-youtube-channels-for-kids/'>More kid-friendly channels</a></li>
            </ul>
            <div style={{textAlign:'center'}}>
                <p>Or you can add your own favorite playlist to page by opening it in your browser and getting the playlist ID, as pictured below.</p>
                <img src='https://i.imgur.com/TyY7u4X.png' style={{maxWidth: '72.5%'}} alt='how to get playlists'/>
            </div>
        </div>
    );
};

export default Recommended;