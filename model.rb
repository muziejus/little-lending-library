require 'data_mapper'
require 'dm-validations'

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
