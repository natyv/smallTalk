class AddCategoryToFavourites < ActiveRecord::Migration
  def change
    add_column :favourites, :category, :string
  end
end
