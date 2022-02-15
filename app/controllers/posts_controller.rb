class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :create_issue
    

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created, include: ["user", "discussion"]
    end

    def index
        render json: Post.all, status: :ok
    end

    def show
        render json: Post.find(params[:id]), status: :ok
    end

    def destroy
        post_destroy = Post.find(params[:id])
        post_destroy.destroy
        head :no_content
    end

    private

    def post_params
        params.permit(:comment, :likes, :user_id, :discussion_id)
    end
    def create_issue(issue)
        render json: { errors: issue.record.errors.full_messages }, status: :unprocessable_entity
         end

         def is_authorized
            permitted = @post.user.id == current_user.id
            render json: "Accessibility is not permitted", status: :forbidden unless permitted
          end
   

end
