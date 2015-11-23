class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :activity
      t.date :date
      t.string :status

      t.timestamps null: false
    end
  end
end
