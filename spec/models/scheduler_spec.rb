require 'rails_helper'

RSpec.describe Scheduler, type: :model do
  before(:all) do
    Habit.create({})
  end
  it "works" do
    expect(it).to_work
  end
end
