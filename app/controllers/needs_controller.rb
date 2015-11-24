class NeedsController < ApplicationController

  def show
    @need = Need.find(params[:id])
  end

  def index
    @needs = Need.all
  end

  def update

    redirect_to :action => 'show', :id => 1
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
