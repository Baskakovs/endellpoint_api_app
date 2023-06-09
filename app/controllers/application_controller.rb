class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized

  private

  def authorized
    return render json: {error: "Not authorized"}, status: :unauthorized unless 
    session.include? :admin_id
  end
end
