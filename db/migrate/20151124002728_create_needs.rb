class CreateNeeds < ActiveRecord::Migration
  def change
    create_table :needs do |t|
      t.integer :goals_average
      t.integer :diet_average
      t.integer :exercise_average
      t.integer :sleep_average
      t.integer :social_average
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
