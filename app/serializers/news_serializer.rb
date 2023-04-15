class NewsSerializer < ActiveModel::Serializer
  attributes :id, :image_src, :title, :description, :admin_id
end
