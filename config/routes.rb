Rails.application.routes.draw do
  root to: 'site#index'
  devise_for :users, :controllers => {:registrations => "users/registrations"}
  resources :habits
  put 'tasks/:id' => 'tasks#update'

end
