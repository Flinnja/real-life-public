class SiteController < ApplicationController
  def index
    if(current_user)
      redirect_to home_path
    else
      render :index
    end
  end
end
