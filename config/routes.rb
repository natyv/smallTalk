Rails.application.routes.draw do

  get '/' => 'users#index'

  get '/api/smalltalks' => 'api/smalltalks#index'

  get '/signup' => 'users#new'
  # post '/users' => 'users#create'
  resources :users
  post '/signup' => 'users#create'

  # get    'login'   => 'sessions#new'

  post   '/signin'   => 'sessions#create'
  delete '/signout'  => 'sessions#destroy'

end
