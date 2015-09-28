class App
  module Views
    class People < Layout
      include ViewHelpers

      def show_all_features
        true
      end

      def static_js
        @static
      end

      def static_html
        @static
      end

      def html_dump
        File.read("app/html/people.html")
      end

      def person
        @people.map{ |p| {
          id: p.id,
          slug: p.slug,
          full_name: p.full_name,
          tags: p.tags_to_sentence,
          address_count: p.addresses.length,
          associations_count: p.associations.length,
          address: p.addresses.map{ |a| {
            latitude: a.latitude,
            longitude: a.longitude,
            street: a.street,
            city: a.city,
            state: a.state
          } }
        } }
      end
    	
    end
  end
end
