class AddNextDateToHabits < ActiveRecord::Migration
  def change
    add_column :habits, :next_date, :date
  end
end
