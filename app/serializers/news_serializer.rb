class NewsSerializer < ActiveModel::Serializer
  attributes :id, :image_src, :title, :description, :updated_at, :created_at

  belongs_to :admin, except: :password_digest
end