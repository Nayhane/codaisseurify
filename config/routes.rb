Rails.application.routes.draw do
  root to: 'artists#index'

    resources :artists, only: [:index, :show, :destroy]
end
