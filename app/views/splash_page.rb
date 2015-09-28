class App
  module Views
    class SplashPage < Mustache
    	include ViewHelpers

      def css_cover
        @css_cover
      end

    end
  end
end

