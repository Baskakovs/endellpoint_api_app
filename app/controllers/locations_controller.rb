class LocationsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    def index
        locations = Location.all
        render json: locations
    end

    def create
        location = Location.new(location_params)
        location.geocode
        location.save!
        render json: location, serializer: LocationSerializer
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_location(invalid)
    end

    def show
        location = Location.find(params[:id])
        render json: location
    end

    def update
        location = Location.find(params[:id])
        location.update!(location_params)
        render json: location, serializer: LocationSerializer
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_location(invalid)
    end

    def destroy
        location = Location.find(params[:id])
        location.destroy
        render json: location
    end

    private

    def location_params
    params.require(:location).permit(:address_name, :building_number, :street, :city, :postcode, :show).merge(admin_id: session[:admin_id])
      end
      

    def invalid_location(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
