class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :comment
      t.integer :likes
      t.integer :user_id
      t.integer :discussion_id
      t.timestamps
    end
  end
end
