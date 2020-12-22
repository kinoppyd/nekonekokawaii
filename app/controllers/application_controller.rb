class ApplicationController < ActionController::Base
  def current_user
    @current_user ||= User.find_by(email: session[:email])
  end

  private

  def make_sure_logged_in
    redirect_to '/posts' unless session[:email]
  end
end
