require 'rails_helper'

RSpec.describe Scheduler, type: :model do
  before(:each) do
    Habit.destroy_all
    @habit_today = FactoryGirl.create(:habit,:today)
    @habit_tomorrow = FactoryGirl.create(:habit,:tomorrow)
  end
  it "schedule method creates tasks correctly" do
    expect{Scheduler.schedule}.to change{Task.count}.by(1)
    expect(Task.first.activity).to eq(@habit_today.name)
  end
  it "schedule_single method creates tasks correctly" do
    expect{Scheduler.schedule_single(Habit.first)}.to change {Task.count}.by(1)
    expect(Task.first.activity).to eq(@habit_today.name)
  end
end
