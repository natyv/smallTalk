Rails.application.routes.draw do

  get '/' => 'users#index'

  get '/api/smalltalks' => 'api/smalltalks#index'

end
