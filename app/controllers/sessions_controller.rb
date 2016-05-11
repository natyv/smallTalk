class SessionsController < ApplicationController

  def create
    if !params[:email].nil?
      user = User.find_by(email: params[:email].downcase)
      if user and user.authenticate(params[:password])
        # Log the user in and redirect to the user's show page.
        session[:user] = user
        render json: { login: true }
      else
        # Create an error message.
        render 'Wrong username or password'
      end
    end
  end

  def destroy
    session[:user] = nil
    render json: { logout: true }
  end

end
