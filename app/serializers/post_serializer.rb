class PostSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes, :user_id, :created_at

  belongs_to :user
    belongs_to :discussion

    
    
end
