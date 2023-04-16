class NewsController < ApplicationController
    def index
        news = News.all
        render json: news
    end
    def create
        news = News.create!(news_params)
        render json: news
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_news(invalid)
    end

    private

    def news_params
        params.permit(:title, :description, :date, :admin_id)
    end

    def invalid_news(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
