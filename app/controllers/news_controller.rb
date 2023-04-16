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

    def restricted_index
        news = []
        3.times do |i|
            news << News.all[i]
        end
        render json: news, each_serializer: NewsLandingSerializer
    end

    private

    def news_params
        params.require(:news).permit(:title, :description, :date, :admin_id)
    end

    def invalid_news(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
