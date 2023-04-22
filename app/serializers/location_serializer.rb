class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address_name, :building_number, :street, :city, :postcode, :latitude, :longitude, :show
end
