class LocationsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    def index
        locations = Location.all
        render json: locations
    end

    def create
        location = Location.create!(location_params)
        render json: location
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_location(invalid)
    end

    def show
        location = Location.find(params[:id])
        render json: location
    end

    private

    def location_params
     params.require(:location).permit(:address_name, :building_number, :street, :city, :postcode)
    end

    def invalid_location(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
