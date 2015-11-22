Rails.application.routes.draw do
  root to: 'site#index'
  devise_for :users
  resources :habits
  put 'tasks/:id' => 'tasks#update'
end
