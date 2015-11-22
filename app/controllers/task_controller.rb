class TaskController < ActionController::Base
  def update
    @task = Task.find(params[:id])
    if(@task.update(task_params))
      flash[:notice] = "Your task has been updated."
    else
      flash[:alert] = "ERROR: Your task update was unsuccessful."
    end
  end

  private
  def task_params
    params.require(:task).permit(:activity, :date, :status, :habit_id)
  end
end
