class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.string :name
      t.string :description
      t.date :start_date
      t.date :end_date
      t.string :frequency

      t.timestamps null: false
    end
  end
end
