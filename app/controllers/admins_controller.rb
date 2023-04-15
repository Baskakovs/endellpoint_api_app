class AdminsController < ApplicationController
    skip_before_action :authorized, only: :create
    def create
        admin = Admin.find_by(email: params[:email])
        if admin
            admin.update!(password: params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        rescue ActiveRecord::RecordInvalid => invalid
            byebug
            unprocessable_entity(invalid)
        else
            byebug
            render json: {error: "This email is not associated with an admin account"}, status: 404
        end
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

