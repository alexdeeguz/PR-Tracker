Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create] do 
      resources :weight_logs, only: [:index, :destroy, :create]
      resources :personal_records, only: [:index, :destroy, :create]
    end
  end
end
