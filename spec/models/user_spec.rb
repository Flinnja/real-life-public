require 'rails_helper'

RSpec.describe User, type: :model do
  describe "A valid user" do
    before(:all) do
      @attrs = FactoryGirl.attributes_for(:user, :valid)
    end

    it "adds to the db when saved" do
      expect{User.new(@attrs).save}.to change{User.count}.by(1)
    end
  end

  describe "An invalid user" do
    before(:all) do
      @inv_attrs = FactoryGirl.attributes_for(:user, :invalid)
    end
    it "does not add to the db when saved" do
      expect{User.new(@inv_attrs).save}.to_not change{User.count}
    end
  end
end
