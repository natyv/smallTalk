Rails.application.routes.draw do

  get '/' => 'users#index'

  get '/api/smalltalks' => 'api/smalltalks#index'

  get '/signup' => 'users#new'

  resources :users
  post '/signup' => 'users#create'

  post   '/signin'   => 'sessions#create'
  delete '/signout'  => 'sessions#destroy'

  resources :favourites

end
