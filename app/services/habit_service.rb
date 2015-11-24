class HabitService
  def self.create(habit: , actor: )
    habit.user = actor
    if habit.save
      Scheduler.schedule_single(habit)
    end
  end
end
