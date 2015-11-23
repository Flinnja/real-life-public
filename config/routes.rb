Rails.application.routes.draw do
  devise_scope :user do
    root to: 'devise/sessions#new'
  end
  devise_for :users, :controllers => {:registrations => "users/registrations"}
  resources :habits
  put 'tasks/:id' => 'tasks#update'

end
