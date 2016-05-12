class FavouritesController < ApplicationController

  def index
    @user = session[:user]
    @fav = Favourite.where(user_id: @user["id"])
  end

  def create
    fav = Favourite.new
    fav.content = params[:content]
    fav.user_id = params[:user_id]
    fav.category = params[:category]
    fav.save
    render json: fav.to_json
  end



end
