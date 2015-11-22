class ChangeFrequencyTypeInHabits < ActiveRecord::Migration
  def up
    change_column :habits, :frequency, 'integer USING CAST(frequency AS integer)'
  end
  def down
    change_column :habits, :frequency, :string
  end
end
