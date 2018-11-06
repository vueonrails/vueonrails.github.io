gem 'webpacker', '>= 4.0.x'
gem 'vueonrails'
route "mount VueOnRails::Engine, at: 'vue'"

# Add bootstrap style with jquery if bootstrap option is provided. Visit https://getbootstrap.com
# Read more about the full options of this application template, please go to github.com/ytbryan/vueonrails
if ARGV.include? "--bootstrap"
  gem 'bootstrap', '~> 4.1.3'
  gem 'jquery-rails'
end

# Add foundation style if foundation option is provided. Visit https://foundation.zurb.com
# Read more about the full options of this application template, please go to github.com/ytbryan/vueonrails
if ARGV.include? "--foundation"
  gem 'foundation-rails'
  gem 'autoprefixer-rails'
end

# Add font-awesome fonts
if ARGV.include? "--fontawesome"
  gem "font-awesome-rails"
end

# Add live-reloading to refresh Rails view
if ARGV.include? "--livereload"
  gem_group :development do
    gem 'guard'
    gem 'guard-livereload', '~> 2.5', require: false
  end
end

# Add whenever for automating cron jobs
if ARGV.include? "--whenever"
  gem 'whenever', require: false
end

# Devise is added by default. Use no-devise option to prevent devise setup. 
# Read more about the full options of this application template, please go to github.com/ytbryan/vueonrails
unless ARGV.include? "--no-devise"
  gem 'devise', '~> 4.4', '>= 4.4.3'
end

# Administrate is added as an administrative manager. Use no-admin option to prevent administrate setup. 
unless ARGV.include? "--no-admin"
  gem 'administrate'
end

# Sidekiq is added as a background processor. Use no-sidekiq option to prevent administrate setup. 
unless ARGV.include? "--no-sidekiq"
  gem 'sidekiq'
end

run 'bundle install' 

unless ARGV.include? "--no-page"
  generate(:scaffold, 'page') 
end

unless ARGV.include? "--no-page"
  route "root to: 'pages#index'"
end

rails_command 'db:create'
rails_command 'db:migrate'
rails_command 'webpacker:install'
rails_command 'webpacker:install:vue'
run "yarn add @rails/webpacker@next"

# Vue on Rails setup to install Vue dependencies, Vue component generators, 
# Configuration and Jest dependencies
rails_command 'vue:setup'

# Gem setup after bundle install
if ARGV.include? "--foundation"
  rails_command 'generate foundation:install'
end

# Init livereload 
if ARGV.include? "--livereload"
  run "guard init livereload"
end

# Finish up the fontawesome setup
if ARGV.include? "--fontawesome"
  fontawesome =   <<-eos
 *= require font-awesome
  eos
   insert_into_file "app/assets/stylesheets/application.css",
   fontawesome, before: " *= require_self"
end

# Finish up the bootstrap setup
if ARGV.include? "--bootstrap"
  run "mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss"
  
  bootstrapcss =   <<-eos
    @import "bootstrap";
  eos
  
  insert_into_file "app/assets/stylesheets/application.scss",
  bootstrapcss, after: " */\n"
  
  bootstrap =   <<-eos
  //= require jquery3
  //= require bootstrap-sprockets   
  eos

  insert_into_file "app/assets/javascripts/application.js",
  bootstrap, before: "//= require_tree ."
end

# Finish up the administrate setup.
unless ARGV.include? "--no-admin"
  rails_command 'generate administrate:install'
end

# Finish up the whenever gem setup.
if ARGV.include? "--whenever"
  run "wheneverize ."
end

# Finish up the devise installation. Use no-devise to exclude the setup.
unless ARGV.include? "--no-devise"
  rails_command "generate devise:install"
end

run "yarn add file:/Users/ytbryan/Desktop/VR/vue-form-for"
run "yarn install"
rails_command "generate vue something --form"

# Generate your first git commit message.
git add: "."
git commit: %Q{ -m 'First commit' }
