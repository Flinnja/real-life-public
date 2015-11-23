class HabitsController < ApplicationController

  def index
  end

  def new
  end

  def edit
    @habit = Habit.find(params[:id])
  end

  def show
    @habit = Habit.find(params[:id])
  end

  def create
    @habit = Habit.create(habit_params)
    if(@habit.valid?)
      Scheduler.schedule_single(@habit)
      redirect_to habits_path
    else
      flash[:alert] = "ERROR: There were one or more problems with your new habit."
      render :new
    end
  end

  def update
    @habit = Habit.find(params[:id])
    if(@habit.update(habit_params))
      flash[:notice] = "Your habit has been updated."
      redirect_to habit_path(@habit)
    else
      flash[:alert] = "ERROR: Your habit update was unsuccessful."
      render :edit
    end
  end

  def destroy
    @habit = Habit.find(params[:id])
    @habit.destroy
    flash[:notice] = "#{@habit.name} has been deleted."
    redirect_to habits_path
  end

  private
  def habit_params
    params.require(:habit).permit(:name,:description,:frequency,:start_date,:end_date,)
  end

end
