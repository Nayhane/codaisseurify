Rails.application.routes.draw do
  root to: 'pages#home'


  resources :artists, only: [:index, :show, :destroy] do
    resources :songs, only: [:create, :destroy]
  end


  namespace :api do
    resources :artists, only: [:index, :show, :destroy] do
      resources :songs, only: [:create, :destroy]
    end
  end
end
