class DiscussionSerializer < ActiveModel::Serializer
  attributes :id, :first, :core_id, :article_title, :discussion_title, :author, :created_at, :updated_at

  has_many :posts
  has_many :users, through: :posts
  

  
end
