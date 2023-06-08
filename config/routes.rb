Rails.application.routes.draw do
  namespace :api do
    resources :locations
    resources :news
    resources :u_admins
    resources :sessions
    resources :admins
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

    resource :admin, only: [:create]
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    post '/auth', to: 'sessions#is_logged_in?'
    get '/news_landing', to: 'news#restricted_index'
    resource :news
    resource :locations
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
