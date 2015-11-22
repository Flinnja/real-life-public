Rails.application.routes.draw do
  resources :habits
  devise_for :users
  root to: 'site#index'
end
