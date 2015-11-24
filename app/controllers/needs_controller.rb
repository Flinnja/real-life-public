class NeedsController < ApplicationController

  def new
  end

  def create
    @need = Need.new(params.require(:need).permit(:goals_average))
    @need.save
    redirect_to @need
  end

  def show
    @need = Need.find(params[:id])
  end

  def index

  end

private
  def need_params
    params.require[:need].permit(
      :goals_average,
      :diet_average,
      :exercise_average,
      :sleep_average,
      :social_average)
  end

end
