require File.expand_path '../spec_helper.rb', __FILE__
require File.expand_path '../../app.rb', __FILE__

RSpec.describe App do
  it "should allow accessing the home page" do
    get '/'
    expect(last_response).to be_ok
    # expect(last_response.body).to eq "Hello World!"
  end

  it "should say “This is the Little Lending Library” on the index page" do
    get '/'
    expect(last_response.body).to include "This is the Little Lending Library"
  end

end
