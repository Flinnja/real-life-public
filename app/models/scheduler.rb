class Scheduler
  def self.schedule
    Habit.all.each do |habit|
      Scheduler.schedule_single(habit)
    end
  end

  def self.schedule_single(habit)
      task = Task.new({activity: habit.name, date: habit.next_date, status: "pending", habit_id: habit.id})
      if(habit.check_schedule)
        task.save
      end
  end
end