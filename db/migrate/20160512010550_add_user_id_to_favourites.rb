class AddUserIdToFavourites < ActiveRecord::Migration
  def change
    add_column :favourites, :user_id, :integer
  end
end
