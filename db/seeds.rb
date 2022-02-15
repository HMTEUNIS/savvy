# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([{user_name: "Holly", password_digest: "honey", num_of_posts: 1, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Secretary_Pompeo_Welcomes_the_2019_Kennedy_Center_Honors_Awardees_to_the_State_Department_%2849188236802%29.jpg/220px-Secretary_Pompeo_Welcomes_the_2019_Kennedy_Center_Honors_Awardees_to_the_State_Department_%2849188236802%29.jpg", user_bio: "Holly is so nice", user_link: "https://en.wikipedia.org/wiki/Big_Bird"}, {user_name: "Max", password_digest: "bear", num_of_posts: 1, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg/220px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single.jpg", user_bio: "Max is so nice", user_link: "https://en.wikipedia.org/wiki/Strawberry"}])

discussions = Discussion.create({discussion_title: "Big if true", core_id: 478981081, article_title: "Knothole December 6, 1995 Vol 48 No 13", author: "SUNY College of Environmental Science and Forestry", first: "THis is the first post of the thread", user_id: 1})

posts = Post.create([{comment: "This is so cool", likes: 3, user_id: 1, discussion_id: 1}, {comment: "I wonder what it is", likes: 0, user_id: 2, discussion_id: 1}])


