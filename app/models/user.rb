class User < ApplicationRecord
    has_secure_password 
    has_many :posts
    has_many :discussions, through: :posts

    validates :user_name, presence: true, uniqueness: true

end
