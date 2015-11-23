require 'rails_helper'

RSpec.describe Habit, type: :model do
  describe "A valid habit" do
    before(:all) do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
    end

    it "adds to the db when saved" do
      expect{Habit.create(@attrs)}.to change{Habit.count}.by(1)
    end
  end

  describe "An invalid habit" do
    before(:all) do
      @inv_attrs = FactoryGirl.attributes_for(:habit, :invalid)
    end
    it "does not add to the db when saved" do
      expect{Habit.create(@inv_attrs)}.to_not change{Habit.count}
    end
  end

  describe "Validations" do
    before(:each) do
      @attrs = FactoryGirl.attributes_for(:habit, :valid)
    end
    it "validates habit name length" do
      @attrs[:name] = ''
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates habit frequency presence" do
      @attrs[:frequency] = ''
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates habit start_date present or future date" do
      @attrs[:start_date] = Date.today-1
      expect(Habit.new(@attrs)).to_not be_valid
    end

    it "validates end_date cannot be before start_date" do
      @attrs[:start_date] = Date.today+5
      @attrs[:end_date] = Date.today+2
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
      end
      before(:each) do
        @habit.next_date = Date.today
      end
      it "correctly increments next_date" do
        expect{@habit.check_schedule}.to change{@habit.next_date}.by(1)
      end
      it "returns true" do
        expect(@habit.check_schedule).to eq(true)
      end
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
      it "returns true" do
        expect(@habit.check_schedule).to eq(false)
      end
    end
  end
end
