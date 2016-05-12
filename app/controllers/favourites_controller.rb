class FavouritesController < ApplicationController
  def create
    fav = Favourite.new
    fav.content = params[:content]
    fav.user_id = params[:user_id]
    fav.save
    render json: fav.to_json
  end



end
