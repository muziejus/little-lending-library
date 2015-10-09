require File.expand_path '../spec_helper.rb', __FILE__
require File.expand_path '../../app.rb', __FILE__

RSpec.describe App do
  it "should allow accessing the home page" do
    get '/'
    expect(last_response).to be_ok
  end

  it "should say “This is the Little Lending Library” on the index page" do
    get '/'
    expect(last_response.body).to include "This is the Little Lending Library"
  end

  it "should have a title that reads “About…” on the about page" do
    get '/about'
    expect(last_response.body).to include "<title>About"
  end

end
