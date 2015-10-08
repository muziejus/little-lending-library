require_relative '../model'

RSpec.describe User do
  it { should have_property :id }
  it { should have_property :name }
  it { should have_property :username }
  it { should have_property :password }
  it { should have_property :email }
  it { should have_property :admin }

  it { should have_many :books }
  it { should have_many :loans }

  it { should validate_uniqueness_of :username }
  it { should validate_presence_of :password }
  it { should validate_presence_of :email }
end

RSpec.describe Book do

  it { should have_property :id }
  it { should have_property :author }
  it { should have_property :title }
  it { should have_property :year }
  it { should have_property :url }
  it { should have_property :cover }
  it { should have_property :notes }
  it { should have_property :added_on }
  it { should have_property :modified_on }
  it { should have_property :isbn }

  it { should belong_to :owner }
  
  it { should have_many :loans }

  it { should validate_presence_of :author }
  it { should validate_presence_of :title }
  it { should validate_presence_of :owner }
end

RSpec.describe Loan do

  it { should have_property :id }
  it { should have_property :status }
  it { should have_property :added_on }
  it { should have_property :modified_on }

  it { should belong_to :borrower }
  it { should belong_to :book }

  it { should validate_presence_of :status }
  it { should validate_presence_of :borrower }
  it { should validate_presence_of :book }

end

RSpec.describe Subject do

  it { should have_property :id }
  it { should have_property :name }

  it { should have_many :books }

  it { should validate_uniqueness_of :name }

end
