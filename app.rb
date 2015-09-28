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
    css :app_css_cover, [ "/css/single-page/cover.css" ]

    js :app_js, [
      "/js/*.js", 
      # "/js/vendor/*.js"
    ]
    js :app_js_people, [ "/js/static_js/people.js" ]
    js :app_js_entities, [ "/js/static_js/entities.js" ]
    js :app_js_institutions, [ "/js/static_js/institutions.js" ]
    js :app_js_london, [ "/js/static_js/london.js" ]
    js :app_js_new_york, [ "/js/static_js/new_york.js" ]
    js :app_js_bay_area, [ "/js/static_js/bay_area.js" ]
    # Tags are not yet added here.

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
    @js_entities = js :app_js_entities
    @js_institutions = js :app_js_institutions
    @js_new_york = js :app_js_new_york
    @js_london = js :app_js_london
    @js_bay_area = js :app_js_bay_area
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
  
  get "/" do
    @css_cover = css :app_css_cover
    @page_title = "Mapping Postwar Poetry"
    mustache :index, { layout: :splash_page }
  end

  get "/about" do
    @page_title = "About"
    mustache :about
  end

  get "/entities/:id" do
    @entity = Entity.get params[:id].match(/\d+$/).to_s.to_i
    mustache :entity_show
  end

  %w(entities people institutions).each do |path|
    get "/#{path}" do
      @static = true
      @page_title = path.capitalize
      @file = path
      # factor out if I need to turn off the staticness, which also means:
      # @entities = Entity.something_or_other
      mustache :entities
    end
  end

  get "/rebuild_static_files" do
    # this only works locally, meaning changes still have to be committed and pushed to heroku. Still, better than nothing!
    @static = false
    {
      people: Entity.people, 
      entities: Entity.all_sorted,
      institutions: Entity.institutions,
      london: Address.londoners,
      new_york: Address.new_yorkers,
      bay_area: Address.bay_areaers,
    }.each do |symbol, collection|
      @entities = collection
      dump = mustache :entities
      %w(html js).each do |extension|
        rebuild_static_file(dump, symbol, extension)
      end
    end
    "Looks like something worked"
  end
 
  %w(london new_york bay_area).each do |path|
    get "/#{path}" do
      @static = true
      location = App.locations["#{path}"]
      @max_bounds = [[location[:south], location[:west]], [location[:north], location[:east]]]
      @page_title = path.capitalize.sub(/_/, " ")
      @file = path
      # same deal about calling Address... as above for Entity
      mustache :entities
    end
  end

  def self.locations
    { "new_york" =>
      { north: 41.42, south: 40.41, east: -73.51, west: -74.29 },
      "london" =>
      { north: 51.764, south: 51.205, east: 0.607, west: -0.635 },
      "bay_area" =>
      { north: 38.0, south: 37.51, east: -121.989, west: -122.70 }
    }
  end

  %w(poets musicians novelists).each do |path|
    get "/tags/#{path}" do
      @page_title = path.capitalize.sub(/_/, " ")
      # @static and @file aren't set.
      @entities = Tag.all(name: path.capitalize.sub(/s$/, "").sub(/_/, " ")).entities.all_sorted
      mustache :entities
    end
  end

end
