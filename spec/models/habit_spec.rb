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
end
