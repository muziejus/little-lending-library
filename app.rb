require "sinatra/base"
require "sinatra/assetpack"
require "mustache/sinatra"
require_relative "./model"

class App < Sinatra::Base
  base = File.dirname(__FILE__)
  set :root, base

  register Sinatra::AssetPack
  register Mustache::Sinatra

  assets do
    serve "/js",    from: "app/js"
    serve "/css",   from: "app/css"
    serve "/img",   from: "app/img"

    css :app_css, [ "/css/*.css", "/css/*.scss" ]

    js :app_js, [
      "/js/*.js", 
    ]

  end

  require "#{base}/app/helpers"
  require "#{base}/app/views/layout"

  set :mustache, {
    :templates => "#{base}/app/templates",
    :views => "#{base}/app/views",
    :namespace => App
  }

  before do
    @css = css :app_css
    @js  = js  :app_js
    @path = request.path_info
  end

  helpers do
  end
  
  get "/" do
    @page_title = "Little Lending Library"
    mustache :index, { layout: :splash_page }
  end

  get "/about" do
    @page_title = "About"
    mustache :about
  end

end
