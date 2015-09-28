class App
  module ViewHelpers

    def page_title 
      @page_title
    end

    def stylesheets
      @css
    end

    def javascripts
      @js
    end

    def js_people
      @js_people
    end

    # def js_chart
    #   @js_chart
    # end

    def demo_modal
      if ENV['RACK_ENV'] == "development"
        false
      else
        true
      end
    end

  end
end
