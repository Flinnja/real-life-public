require 'rails_helper'

RSpec.describe Habit, type: :model do
  describe "A valid habit" do
    before(:all) do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
    end

    it "adds to the db when saved" do
      expect{Habit.new(@attrs).save}.to change{Habit.count}.by(1)
    end
  end

  describe "An invalid habit" do
    before(:all) do
      @inv_attrs = FactoryGirl.attributes_for(:habit, :invalid)
    end
    it "does not add to the db when saved" do
      expect{Habit.new(@inv_attrs).save}.to_not change{Habit.count}
    end
  end

  describe "Validations" do
    it "validates habit name length" do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
      @attrs[:name] = ''
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates habit frequency presence" do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
      @attrs[:frequency] = ''
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates habit start_date syntax" do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
      @attrs[:start_date] = 'poo'
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates habit start_date present or future date" do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
      @attrs[:start_date] = '01-12-2013'
      expect(Habit.new(@attrs)).to_not be_valid
    end
  end

  describe "Next_date" do
    before(:all) do
      @attrs = FactoryGirl.attributes_for(:habit,:valid)
      @habit = Habit.create(@attrs)
    end
    it "is set to start_date when habit is created" do
      expect(@habit.next_date).to eq(@habit.start_date)
    end
  end

  describe "Check_schedule" do
    describe "when next_date is today" do
      before(:all) do
        @attrs = FactoryGirl.attributes_for(:habit,:valid)
        @attrs[:frequency] = 1
        @habit = Habit.create(@attrs)
        @habit.next_date = Date.today
      end
      it "correctly increments next_date" do
        expect{@habit.check_schedule}.to change{@habit.next_date}.by(1)
      end
      it "tries to create a new task"
    end
    describe "when next_date is not today" do
      before(:all) do
        @attrs = FactoryGirl.attributes_for(:habit,:valid)
        @attrs[:frequency] = 1
        @habit = Habit.create(@attrs)
        @habit.next_date = Date.today+1
      end
      it "doesn't change next_date" do
        expect{@habit.check_schedule}.to_not change{@habit.next_date}
      end
      it "doesn't try to create a new task"
    end
  end
end
