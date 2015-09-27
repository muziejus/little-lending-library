class App
  module Views
    class Layout < Mustache
    	include ViewHelpers

      def selected_item(text)
        if @path =~ /^\/#{text}$/
          "active"
        end
      end

    end
  end
end
