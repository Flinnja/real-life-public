Rails.application.routes.draw do
  root to: 'site#index'
  devise_for :users
  resources :habits
  resources :needs
  get '/home' => 'home#index'
  put 'tasks/:id' => 'tasks#update'

end
