class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.email = params[:email]
    @user.password = params[:password]

    if @user.save
      session[:user] = @user
      redirect_to '/'

    else
      render :new
    end
  end

end
