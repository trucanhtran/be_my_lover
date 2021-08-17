Rails.application.routes.draw do
  root to: 'bemylover#index'
  get '/send-my-love', to: 'bemylover#sendmylove', as: 'send_my_love'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
