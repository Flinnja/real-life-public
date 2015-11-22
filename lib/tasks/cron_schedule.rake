desc 'check task creation'
task check_task_creation: :environment do
  Scheduler.schedule
end
