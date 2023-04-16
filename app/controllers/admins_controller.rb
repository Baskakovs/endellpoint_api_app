class AdminsController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def create
        uadmin = UAdmin.find_by(email: params[:email])
        if uadmin
            admin = Admin.new(email: uadmin.email, name: params[:name], password: params[:password])
            if admin.save
                session[:admin_id] = admin.id
                uadmin.destroy
                render json: admin, status: :created
            else
                render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { error: "This email is not associated with an admin account" }, status: 404
        end
    end
end
