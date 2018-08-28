gem 'vuejs', '> 1.0.39'
run "bundle install" 
generate(:scaffold, "pages")
run 'rails db:create'
run "rails db:migrate"