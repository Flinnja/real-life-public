class HabitsController < ApplicationController

  def index
  end

  def create
    @habit = Habit.create(habit_params)
    if(@habit.valid?)
      redirect_to habits_path
    else
      render :new
    end
  end

  def new
  end

  private
  def habit_params
    params.require(:habit).permit(:name,:description,:frequency,:start_date,:end_date,)
  end

end
