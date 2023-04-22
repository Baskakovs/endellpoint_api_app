class Location < ApplicationRecord
    belongs_to :admin
    geocoded_by :full_address
    after_validation :geocode

    # VALIDATIONS
    validates :address_name, presence: true
    validates :building_number, presence: true
    validates :street, presence: true
    validates :city, presence: true
    validates :postcode, presence: true
    validates :show, presence: true

    def full_address
        [building_number, street, postcode, city].compact.join(', ')
    end
end
