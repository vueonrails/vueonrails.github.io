gem 'webpacker', '~> 3.x'
gem 'vueonrails', '~> 0.x'
route "mount Vueonrails::Engine, at: 'vue'"

# Use --bootstrap to add bootstrap style with jquery. Read more https://getbootstrap.com
# Read more about the full options of this application template, please go to github.com/vueonrails/vueonrails
if ARGV.include? "--bootstrap"
  gem 'bootstrap', '~> 4.1.3'
  gem 'jquery-rails'
end

# Use --foundation to add foundation style. Read more https://foundation.zurb.com
# Read more about the full options of this application template, please go to github.com/vueonrails/vueonrails
if ARGV.include? "--foundation"
  gem 'foundation-rails'
  gem 'autoprefixer-rails'
end

# Add font-awesome fonts
if ARGV.include? "--fontawesome"
  gem "font-awesome-rails"
end

# Add live-reloading to refresh Rails view https://github.com/guard/guard-livereload
if ARGV.include? "--livereload"
  gem_group :development do
    gem 'guard'
    gem 'guard-livereload', '~> 2.5', require: false
  end
end

# Add whenever for automating cron jobs. Read more https://github.com/javan/whenever
if ARGV.include? "--whenever"
  gem 'whenever', require: false
end

# Use --devise to add Devise. Read more https://github.com/plataformatec/devise
# Read more about the full options of this application template, please go to http://github.com/vueonrails/vueonrails
if ARGV.include? "--devise"
  gem 'devise', '~> 4.4', '>= 4.4.3'
end

# Use --admin to add Administrate as your administrative manager. Read more https://github.com/thoughtbot/administrate
if ARGV.include? "--admin"
  gem 'administrate'
end

# Use --sidekiq to add Sidekiq as your background processor. Read more https://github.com/mperham/sidekiq
if ARGV.include? "--sidekiq"
  gem 'sidekiq'
end

run 'bundle install'

unless ARGV.include? "--no-page"
  generate(:scaffold, 'page')
  route "root to: 'pages#index'"
end

rails_command 'db:create'
rails_command 'db:migrate'
rails_command 'webpacker:install'
rails_command 'webpacker:install:vue'

# Vue on Rails setup to install Vue dependencies, Vue component generators
# Configuration and Jest dependencies. Read more http://github.com/vueonrails/vueonrails
rails_command 'vue:setup'

# Gem setup after bundle install
if ARGV.include? "--foundation"
  rails_command 'generate foundation:install'
end

# Init livereload
if ARGV.include? "--livereload"
  run "guard init livereload"
end

# Finish the fontawesome setup
if ARGV.include? "--fontawesome"
  fontawesome =   <<-eos
 *= require font-awesome
  eos
   insert_into_file "app/assets/stylesheets/application.css",
   fontawesome, before: " *= require_self"
end

# Finish the bootstrap setup
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

# Finish the administrate setup.
if ARGV.include? "--admin"
  rails_command 'generate administrate:install'
end

# Finish the whenever gem setup.
if ARGV.include? "--whenever"
  run "wheneverize ."
end

# Finish the devise installation.
if ARGV.include? "--devise"
  rails_command "generate devise:install"
end

# Generate your first git commit message.
git add: "."
git commit: %Q{ -m 'First commit' }
