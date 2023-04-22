class LocationSerializer < ActiveModel::Serializer
  attributes :id, :latitude, :longitude, :name, :user_id
end
