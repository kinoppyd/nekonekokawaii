class SessionsController < ApplicationController

  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:email] = @user.email
    redirect_to '/posts'
  end

  def destroy
    session[:email] = nil
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end