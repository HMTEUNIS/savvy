Rails.application.routes.draw do
  
  resources :posts, only: [:create, :index, :show, :destroy, :update]
  resources :discussions, only: [:create, :index, :show, :destroy, :update] do
    resources :posts do
      resources :users
    end
  end
  resources :users, only: [ :index, :show, :destroy, :update]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#me'
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

 