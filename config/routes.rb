Rails.application.routes.draw do

  root to: 'bemylover#index'
  get '/send-my-love', to: 'bemylover#sendmylove', as: 'send_my_love'
  post '/send-my-love', to: 'bemylover#send_letter', as: 'send_letter'
  get 'ending', to: 'bemylover#ending'
  get 'admin/dashboard', to: "admin#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
