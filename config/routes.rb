Rails.application.routes.draw do
  mount_devise_token_auth_for 'Parent', at: 'auth'
  
  resources :kids do 
    resources :playlists
  end
end
