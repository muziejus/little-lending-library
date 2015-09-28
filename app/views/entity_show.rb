class App
  module Views
    class EntityShow < Layout

      def show_individual_entitys_features
        true
      end

      def bounds
        lats = @entity.addresses.map{ |a| a.latitude }.sort
        lngs = @entity.addresses.map{ |a| a.longitude }.sort
        [[lats.first - 0.01, lngs.first - 0.01], [lats.last + 0.01, lngs.last + 0.01]]
      end

      def circle
        @entity.addresses.map{ |a| {
          latlng: [a.latitude, a.longitude],
          popup: "#{a.street}<br />#{a.city}, #{a.state} #{a.postal_code}<br />#{a.country}"
        } }
      end

      def id
        @entity.id
      end

      def slug
        @entity.slug
      end

      def full_name
        @entity.full_name
      end

      def tags
        @entity.tags_to_sentence
      end

      def url
        @entity.url
      end

      def address
        @entity.addresses.map{ |a| {
          latitude: a.latitude,
          longitude: a.longitude,
          street: a.street,
          city: a.city,
          state: a.state,
          country: a.country,
          postal_code: a.postal_code,
          address_id: a.id
        } }
      end

      def association
        @entity.entities.map{ |a| {
          association_id: a.id,
          association_full_name: a.full_name
        } }
      end

    end
  end
end
