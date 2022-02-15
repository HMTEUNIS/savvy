class CreateDiscussions < ActiveRecord::Migration[6.1]
  def change
    create_table :discussions do |t|
      t.text :first
      t.integer :core_id
      t.string :article_title
      t.string :discussion_title
      t.string :author
      t.integer :user_id
      t.timestamps
    end
  end
end
