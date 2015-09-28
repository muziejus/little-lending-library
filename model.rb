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
  property :last_name, String
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

  def self.people
    self.all(type: "person")
  end

  def full_name
    self.last_name ? "#{self.name} #{self.last_name}" : self.name
  end

  def slug
    "#{self.name}_#{self.last_name}".parameterize.underscore.camelize(:lower)
    # "#{self.name}_#{self.last_name}".sub(/_$/, "").parameterize.underscore.camelize(:lower)
  end

  def tags_to_sentence
    self.tags.map{ |t| t.name}.to_sentence
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

DataMapper.auto_upgrade!
