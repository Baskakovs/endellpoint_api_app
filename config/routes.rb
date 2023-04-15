Rails.application.routes.draw do
  
  resources :sessions
  resources :admins
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resource :admin, only: [:update]
  post '/login', to: 'sessions#create'
end
