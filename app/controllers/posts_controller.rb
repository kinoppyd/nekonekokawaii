class PostsController < ApplicationController
  before_action :current_user
  before_action :make_sure_logged_in, only: [:create]

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    post = Post.create(create_params)
    post.save!
    render json: post
  end

  private

  def create_params
    params.permit(:title, :body)
  end
end
