class NewsLandingSerializer < ActiveModel::Serializer
  attributes :id , :title, :description, :date
  belongs_to :admin, serializer: AdminSerializerLandingSerializer
end
