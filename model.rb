require 'data_mapper'
require 'dm-validations'
require 'active_support'
require 'active_support/inflector'
require 'active_support/core_ext/array/conversions'

# DATABASE_URL is set by running: heroku config:set DATABASE_URL="<as in web client>"
DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite://#{Dir.pwd}/sqlite.db")

class Entity
  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :first_name, String
  property :aka, String
  property :title, String
  property :type, String
  property :url, Text
  property :once, Boolean
  property :paris_review, Boolean

  has n, :addressizations
  has n, :addresses, through: :addressizations
  has n, :taggizations
  has n, :tags, through: :taggizations
  has n, :associations, child_key: [ :source_id ]
  has n, :entities, self, through: :associations, via: :target

  def self.all_sorted
    all(order: [ :name.asc, :first_name.asc ])
  end

  def self.people
    all(type: "person", order: [ :name.asc, :first_name.asc ])
  end

  def self.institutions
    all(type: "institution", order: [ :name.asc ])
  end

  def full_name
    first_name ? "#{first_name} #{name}" : name
  end

  def slug
    "#{first_name}_#{name}".parameterize.underscore.camelize(:lower)
  end

  def slug_id
    "#{slug}_#{id}"
  end

  def tags_to_sentence
    tags.map{ |t| t.name}.to_sentence
  end

end

class Address
  include DataMapper::Resource

  property :id, Serial
  property :care_of, String
  property :street, String
  property :city, String
  property :state, String
  property :postal_code, String
  property :country, String
  property :telephone, String
  property :listed_name, String
  property :notes, Text
  property :latitude, Float
  property :longitude,Float
  property :original, Boolean
  property :crossed_out, Boolean
  property :recheck, Boolean

  def self.londoners
    london = App.locations["london"]
    all(:latitude.gt => london[:south], :latitude.lt => london[:north]).entities.all_sorted
  end

  def self.new_yorkers
    new_york = App.locations["new_york"]
    all(:latitude.gt => new_york[:south], :latitude.lt => new_york[:north]).entities.all_sorted
  end

  def self.bay_areaers
    bay_area = App.locations["bay_area"]
    all(:latitude.gt => bay_area[:south], :latitude.lt => bay_area[:north]).entities.all_sorted
  end

  has n, :addressizations
  has n, :entities, through: :addressizations
end

class Tag
  include DataMapper::Resource

  property :id, Serial
  property :name, String

  has n, :taggizations
  has n, :entities, through: :taggizations
end

class Association # This should be illegal?
  include DataMapper::Resource

  property :id, Serial

  belongs_to :source, 'Entity', key: true
  belongs_to :target, 'Entity', key: true
end

class Addressization
  include DataMapper::Resource

  property :id, Serial

  belongs_to :address
  belongs_to :entity
end

class Taggization
  include DataMapper::Resource

  property :id, Serial

  belongs_to :tag
  belongs_to :entity
end

# DataMapper.auto_migrate! # empties out the database.
DataMapper.auto_upgrade!
