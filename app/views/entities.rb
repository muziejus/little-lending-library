class App
  module Views
    class Entities < Layout
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
        File.read("app/html/#{@file}.html")
      end

      def js_dump
        case @file
        when "people"
          @js_people
        when "institutions"
          @js_institutions
        when "entities"
          @js_entities
        when "new_york"
          @js_new_york
        when "london"
          @js_london
        when "bay_area"
          @js_bay_area
        else
          "<!-- could not find JS data to dump here -->"
        end
      end

      def entity
        @entities.map{ |p| {
          slug_id: p.slug_id,
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
