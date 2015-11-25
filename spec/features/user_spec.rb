require 'rails_helper'

RSpec.feature 'User features', type: :feature do
  before(:all) do
    @user_attrs = FactoryGirl.attributes_for(:user, :valid)
  end
  describe 'When using valid attributes' do
    it 'user can sign up' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      expect(page).to have_content('signed up successfully')
    end
    it 'user can update their details' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Edit Profile'
      fill_in 'Name', with: "Banana Bob"
      fill_in 'Current password', with: @user_attrs[:password]
      click_button 'Update'
      expect(page).to have_content('updated successfully')
    end
    it 'user can log out' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Logout'
      expect(page).to have_content('Signed out successfully')
    end
    it 'user can sign back in' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Logout'
      click_link 'Log In'
      fill_in 'Email', with: @user_attrs[:email]
      fill_in 'Password', with: @user_attrs[:password]
      click_button 'Log in'
      expect(page).to have_content('Signed in successfully')
    end
    it 'user can delete their account' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Edit Profile'
      click_button 'Cancel my account'
      #poltergeist automatically accepts js alert box
      expect(page).to have_content('successfully cancelled')
    end
  end

  describe 'Invalid form input cases' do
    it 'will not allow multiple accounts with same email' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Logout'
      visit new_user_registration_path
      sign_up(@user_attrs)
      expect(page).to have_content('Email has already been taken')
    end
    it 'will inform user of non-matching passwords' do
      visit new_user_registration_path
      complete_sign_up_form(@user_attrs)
      fill_in 'Password confirmation', with: "nonsenseuhoh"
      click_button 'Sign Up'
      expect(page).to have_content("Password confirmation doesn't match Password")
    end
    it 'will not allow a user to update without current password' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Edit Profile'
      fill_in 'Name', with: 'Naughty Name'
      click_button 'Update'
      expect(page).to have_content("Current password can't be blank")
    end
    it "will not allow user to log in with an account that doesn't exist" do
      visit new_user_session_path
      fill_in 'Email', with: 'notsignedup@nope.no'
      fill_in 'Password', with: 'aShameForYouSpaghettiMan'
      click_button 'Log in'
      expect(page).to have_content('Invalid email or password')
    end
    it 'will not allow a user to log in with the wrong password' do
      visit new_user_registration_path
      sign_up(@user_attrs)
      click_link 'Logout'
      click_link 'Log In'
      fill_in 'Email', with: @user_attrs[:email]
      fill_in 'Password', with: 'uhOhSpaghettiOs'
      click_button 'Log in'
      expect(page).to have_content('Invalid email or password')
    end
  end
end

def sign_up(user_attrs)
  complete_sign_up_form(user_attrs)
  click_button 'Sign Up'
end

def complete_sign_up_form(user_attrs)
  fill_in 'Name', with: user_attrs[:name]
  fill_in 'Email', with: user_attrs[:email]
  fill_in 'Password', with: user_attrs[:password]
  fill_in 'Password confirmation', with: user_attrs[:password]
end
