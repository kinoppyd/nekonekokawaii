class SessionsController < ApplicationController

  def create
    return render 401 if auth_hash["extra"]["id_info"]["email"] != 'ppyd@kinoppyd.dev'
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