class FavouritesController < ApplicationController
  def create
    fav = Favourite.new
    fav.content = params[:content]
    fav.save
    render json: fav.to_json
  end



end
