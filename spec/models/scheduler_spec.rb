require 'rails_helper'

RSpec.describe Scheduler, type: :model do
  before(:each) do
    Habit.destroy_all
    @habit_today = FactoryGirl.create(:habit,:today)
    @habit_tomorrow = FactoryGirl.create(:habit,:tomorrow)
  end
  it "creates tasks relevant to habits scheduled for today" do
    expect{Scheduler.schedule}.to change{Task.count}.by(1)
    expect(Task.first.activity).to eq(@habit_today.name)
  end
end
