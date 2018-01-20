Rails.application.routes.draw do
  root to: 'pages#home'



    resources :artists, only: [:index, :show, :destroy]
end
