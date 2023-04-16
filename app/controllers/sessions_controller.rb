class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy]
    def create
        admin = Admin.find_by(email: params[:email])
        if admin &.authenticate(params[:password]) #Bcrypt checks if the password provided matches the password stored in the database for the user.
            session[:admin__id] = admin.id
            render json: admin, status: :created
        else
            render json: {error: "Invalid username or password"}, status: 401
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def is_logged_in?
        if session[:admin_id] == params[:admin_id]
            admin = Admin.find_by(id: params[:admin_id])
            render json: admin
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

end
