gem 'webpacker', '~> 3.5.5'
gem 'vuejs', '> 1.0.39'
run 'bundle install' 
generate(:scaffold, 'pages') 
route "mount Vuejs::Engine, at: 'vue'"
route "root to: 'pages#index'"
rails_command 'db:create'
rails_command 'db:migrate'
rails_command 'webpacker:install'
rails_command 'webpacker:install:vue'
rails_command 'vue:setup'
git :init