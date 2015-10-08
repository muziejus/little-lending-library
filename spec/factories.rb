FactoryGirl.define do
  factory :user do
    username "test-user"
    name "Test User"
    email "test@test.com"
    admin false
  end

  factory :admin, class: User do
    username "admin-user"
    name "Admin User"
    email "admin@test.com"
    admin true
  end

  factoryZZ
end
