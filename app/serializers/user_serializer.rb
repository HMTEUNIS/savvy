class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :img_url, :user_bio, :user_link
  has_many :posts
    has_many :discussions, through: :posts

  

end