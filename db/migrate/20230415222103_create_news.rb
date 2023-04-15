class CreateNews < ActiveRecord::Migration[6.1]
  def change
    create_table :news do |t|
      t.string :image_src
      t.string :title
      t.string :description
      t.string :admin_id

      t.timestamps
    end
  end
end
