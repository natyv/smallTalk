class CreateFavourites < ActiveRecord::Migration
  def change
    create_table :favourites do |t|
      t.string :content

      t.timestamps null: false
    end
  end
end
