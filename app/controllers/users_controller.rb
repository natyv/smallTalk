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
    if User.exists?(email: params[:email])
      render :new
    else
      if @user.save
        session[:user] = @user
        redirect_to '/'
      else
        render :new
      end
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.password = params[:user][:password]
    @user.save
    redirect_to '/'
  end

end
