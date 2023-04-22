class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.float :latitude
      t.float :longitude
      t.string :address_name
      t.string :building_number
      t.string :street
      t.string :city
      t.string :postcode
      t.integer :admin_id
      t.boolean :show

      t.timestamps
    end
  end
end
