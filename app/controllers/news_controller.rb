class NewsController < ApplicationController
    skip_before_action :authorized, only: [:restricted_index]
    def index
        news = News.all
        render json: news, status: :ok
    end

    def show
        news = News.find(params[:id])
        render json: news, status: :ok
    end

    def create
        news = News.create!(news_params)
        render json: news, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_news(invalid)
    end

    def update
        news = News.find(params[:id])
        news.update!(news_params)
        render json: news, status: :accepted
    rescue ActiveRecord::RecordInvalid => invalid
        invalid_news(invalid)
    end

    def destroy
        news = News.find(params[:id])
        news.destroy
        render json: news, status: :accepted
    end

    def restricted_index
        news = News.includes(:admin).limit(5)
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
