class AdminController < ApplicationController
  def index
    @comments = Comment.all
  end
end
