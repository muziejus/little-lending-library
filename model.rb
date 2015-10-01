require 'data_mapper'
require 'dm-validations'
require 'active_support'
require 'active_support/inflector'
require 'active_support/core_ext/array/conversions'

# DATABASE_URL is set by running: heroku config:set DATABASE_URL="<as in web client>"
DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite://#{Dir.pwd}/sqlite.db")

class User
  include DataMapper::Resource
  # include BCrypt

  property :id, Serial
  property :name, String
  property :username, String, key: true
  property :password, BCryptHash
  property :email, String

  has n, :books, child_key: [ :owner_id ]
  has n, :loans, child_key: [ :owner_id ]
  has n, :loans, child_key: [ :borrower_id ]
  # has n, :associations, child_key: [ :source_id ]
  # has n, :entities, self, through: :associations, via: :target

  validates_uniqueness_of :username
  validates_presence_of :password
  validates_presence_of :email

end

class Book
  include DataMapper::Resource

  property :id, Serial
  property :author, String # should maybe be array, but...
  property :title, String
  property :year, Integer
  property :url, Text
  property :cover, Text
  property :notes, Text
  property :added_on, Date
  property :modified_on, Date

  has n, :loans

  belongs_to :owner, 'User', key: true

  validates_presence_of :author
  validates_presence_of :title
  validates_presence_of :owner

end

class Loan
  include DataMapper::Resource

  property :id, Serial, key: true
  property :status, String
  property :added_on, Date
  property :modified_on, Date
  
  belongs_to :owner, 'User', key: true
  belongs_to :borrower, 'User', key: true
  belongs_to :book

  validates_presence_of :status
  validates_presence_of :owner
  validates_presence_of :borrower
  validates_presence_of :book
end

# DataMapper.auto_migrate! # empties out the database.
DataMapper.auto_upgrade!
