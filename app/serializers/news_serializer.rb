class NewsSerializer < ActiveModel::Serializer
  attributes :id, :image_src, :title, :description, :updated_at, :created_at, :date

  belongs_to :admin, except: :password_digest
end