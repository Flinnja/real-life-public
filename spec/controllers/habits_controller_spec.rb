require 'rails_helper'

RSpec.describe HabitsController, type: :controller do

  describe "Create path" do
    describe "A valid post request" do
      let(:habit_params) {FactoryGirl.attributes_for :habit, :valid}
      let!(:post_habit) {post :create, habit: habit_params}
      it "redirects to habits index" do
        expect(response).to redirect_to(habits_path)
      end
    end
    describe "An invalid post request" do
      let(:habit_params) {FactoryGirl.attributes_for :habit, :invalid}
      let!(:post_habit) {post :create, habit: habit_params}
      it "returns HTTP resonse 200" do
        expect(response.status).to eq(200)
      end
    end
  end

end
