Parent.destroy_all

kathy = Parent.new({
    email: 'kathy_bates@mom.com',
    password: 'password',
    password_confirmation: 'password',
    kids: [
        Kid.create({
            nickname: 'Timmy',
            profile_pic: 'https://i.imgur.com/G4xzUO0.jpg',
            playlists: [
                Playlist.create({
                   name: 'Traveling Trio',
                   embed_URL: 'https://www.youtube.com/embed/OPkuV6SLneo'
                })           
            ]
        }),
        Kid.create({
            nickname: 'Kimmy',
            profile_pic: 'https://i.imgur.com/PdZx7Mg.png',
            playlists: [
                Playlist.create({
                    name: 'Learn Colors',
                    embed_URL: 'https://www.youtube.com/embed/jkCUjcU2hAY'
                })
                
            ]
        })
    ]
})


kathy.save
    
