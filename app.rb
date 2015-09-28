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
      # "/js/vendor/*.js"
    ]
    js :app_js_people, [ "/js/static_js/people.js" ]
    # js :app_js_chart, [ "/js/vendor/Chart.js", "/js/vendor/Chart.Scatter.js" ]

    # Heroku doesn't like this call but assets end up minified anyway.
    # Left them in in for reference.
    #css_compression :sass
    #js_compression  :jsmin
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
    @js_people = js :app_js_people
    # @js_chart = js :app_js_chart
    @path = request.path_info
  end

  helpers do
    def rebuild_static_file(dump, symbol, extension)
      if extension == "html"
        file = "app/html/#{symbol}.html"
      elsif extension == "js"
        file = "app/js/static_js/#{symbol}.js"
      end
      File.open(file, "w") do |f|
        write = false
        dump.each_line do |line|
          if line =~ /static_#{extension}_start/
            write = true
          elsif line =~ /static_#{extension}_end/
            write = false
          end
          if write == true
            f.write line
          end
        end
      end
    end
  end

  
  # Function allows both get / post.
  def self.get_or_post(path, opts={}, &block)
    get(path, opts, &block)
    post(path, opts, &block)
  end   

  get "/" do
    @page_title = "Home"
    mustache :index, { layout: :splash_page }
  end

  get "/about" do
    @page_title = "About"
    mustache :about
  end

  get "/people" do
    @static = true
    @page_title = "People"
    @people = Entity.people
    mustache :people
  end

  get "/rebuild_static_files" do
    # this only works locally, meaning changes still have to be committed and pushed to heroku. Still, better than nothing!
    @static = false
    @people = Entity.people
    dump = mustache :people
    %w(html js).each do |extension|
      rebuild_static_file(dump, :people, extension)
    end
  end

  get "/people/:id" do
    @entity = Entity.get params[:id]
    mustache :person
  end

  ["/new_york", "/bay_area", "/london", "/institutions"].each do |path|
    get path do
      redirect "/"
    end
  end

end
