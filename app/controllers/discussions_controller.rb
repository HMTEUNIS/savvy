class DiscussionsController < ApplicationController

        rescue_from ActiveRecord::RecordInvalid, with: :create_issue

    
        def create
            new_discussion = Discussion.create!(dis_params)
            render json: new_discussion, status: :created
           

        end

        def index
            discussions = Discussion.all
           
            render json: discussions, status: :ok, include: ["posts", "posts.user"]

        end

        def show
            render json: Discussion.find(params[:id]), status: :ok, include: ["posts", "posts.user"]
        end
    
        def destroy
            dis_destroy = Discussion.find(params[:id])
            dis_destroy.destroy
            head :no_content
        end
    
        private
        def post_params
            params.permit(:comment, :likes, :user_id, :discussion_id)
        end
    
        def dis_params
            params.permit(:discussion_title, :core_id, :article_title, :author, :first)
        end
        def create_issue(issue)
            render json: { errors: issue.record.errors.full_messages }, status: :unprocessable_entity
             end
       
    end
