Rails.application.routes.draw do
  get 'users/new'

  root 'static#home'
end
