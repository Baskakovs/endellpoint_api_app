class SessionsController < ApplicationController
    skip_before_action :authorized, only: [:create, :destroy, :is_logged_in?]
    def create
        admin = Admin.find_by(email: params[:email])
        if admin &.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin, status: :created
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    def is_logged_in?
        if session[:admin_id] == params[:admin_id]
            admin = Admin.find_by(id: params[:admin_id])
            render json: admin, status: :ok
            session[:admin_id] = params[:admin_id]
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

end
