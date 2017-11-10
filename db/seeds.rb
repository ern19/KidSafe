Parent.destroy_all

kathy = Parent.new({
    email: 'kathy_bates@mom.com',
    password: 'password',
    password_confirmation: 'password',
    kids: [
        Kid.create({
            nickname: 'Timmy',
            profile_pic: 'http://www.thinkgeek.com/images/products/zoom/kiji_teen_titans_day_kids_tee_mb.jpg'
        }),
        Kid.create({
            nickname: 'Kimmy',
            profile_pic: 'http://www.urbandojo.com/assets/custom/sales_pages/template0/klma/images/index/karate-student.png'
        })
    ]
})


kathy.save
    
