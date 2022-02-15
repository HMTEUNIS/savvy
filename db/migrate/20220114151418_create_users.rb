class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.integer :num_of_posts
      t.string :img_url
      t.text :user_bio
      t.string :user_link
      t.timestamps
    end
  end
end
