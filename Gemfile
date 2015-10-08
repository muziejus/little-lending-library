source 'http://rubygems.org'

ruby '2.2.3'

gem 'sinatra'
gem 'sinatra-support', require: 'sinatra/support'
gem 'sinatra-assetpack', require: 'sinatra/assetpack'
gem 'mustache-sinatra'
gem 'activesupport'
gem 'data_mapper'
gem 'dm-sqlite-adapter', group: :development
gem 'dm-postgres-adapter', group: :production
gem 'dm-validations'
gem 'thin'
gem 'shotgun'
gem 'unicorn'

group :test, :development do
  gem 'rack-test', require: 'rack/test'
  gem 'rspec'
  gem 'dm-rspec'
  gem 'factory_girl'
end
