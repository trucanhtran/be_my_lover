class BemyloverController < ApplicationController
  def index
  end

  def bemylover

  end

  def send_letter
    comment = Comment.create(content: params[:content])
    redirect_to ending_path
  end

  def ending

  end
end
