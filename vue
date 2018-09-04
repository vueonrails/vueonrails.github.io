gem 'webpacker', '~> 3.5.5'
gem 'vuejs', '> 1.0.39'
run 'bundle install' 
generate(:scaffold, 'pages')
route "root to: 'pages#index'"
run 'rails db:create'
run 'rails db:migrate'
run 'rails webpacker:install'
run 'rails webpacker:install:vue'
run 'rails vue:setup'