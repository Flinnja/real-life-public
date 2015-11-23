class AddHabitIdToTasks < ActiveRecord::Migration
  def change
        add_column :tasks, :habit_id, :integer
  end
end
