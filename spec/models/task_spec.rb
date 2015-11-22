require 'rails_helper'

RSpec.describe Task, type: :model do
    describe "A valid task" do
    before(:all) do
      @attrs = FactoryGirl.attributes_for(:task, :valid)
    end

    it "adds to the db when saved" do
      expect{Task.new(@attrs).save}.to change{Task.count}.by(1)
    end
  end

  describe "An invalid task" do
    before(:all) do
      @inv_attrs = FactoryGirl.attributes_for(:task, :invalid)
    end
    it "does not add to the db when saved" do
      expect{Task.new(@inv_attrs).save}.to_not change{Task.count}
    end
  end

  describe "Validations" do
    it "validates task activity presence" do
      @attrs = FactoryGirl.attributes_for(:task, :valid)
      @attrs[:activity] = ''
      expect(Task.new(@attrs)).to_not be_valid
    end
    it "validates task status presence" do
      @attrs = FactoryGirl.attributes_for(:task, :valid)
      @attrs[:status] = ''
      expect(Task.new(@attrs)).to_not be_valid
    end
    it "validates date to not be in the past" do
      @attrs = FactoryGirl.attributes_for(:task, :valid)
      @attrs[:date] = '01-12-2013'
      expect(Task.new(@attrs)).to_not be_valid
    end
  end
end
