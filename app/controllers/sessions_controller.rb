class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    def create
        admin = Admin.find_by(email: params[:email])
        if user &.authenticate(params[:password]) #Bcrypt checks if the password provided matches the password stored in the database for the user.
            session[:admin__id] = admin.id
            render json: admin, status: :created
        else
            render json: {error: "Invalid username or password"}, status: 401
        end
    end

    def destroy
        session.delete :admin_id
        render json: {message: "Logged out"}
    end
end
