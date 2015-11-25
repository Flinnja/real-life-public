class HabitService
  def self.create(habit: habit, actor: actor)
    habit.user = actor
    if habit.save
      Scheduler.schedule_single(habit)
      return true
    end
  end
end
