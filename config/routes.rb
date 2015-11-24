Rails.application.routes.draw do
  root to: 'site#index'
  devise_for :users
  resources :habits
  get '/home' => 'home#index'
  get '/needs' => 'needs#index'
  put 'tasks/:id' => 'tasks#update'

end
