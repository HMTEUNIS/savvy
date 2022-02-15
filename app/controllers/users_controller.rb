class UsersController < ApplicationController


    def create
        user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id # this is the piece that logs a user in and keeps track of users info in subsequent requests.
            render json: user, status: :created
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
      end
    # def create
    #     new_user = User.create!(user_params)
    #     render json: new_ap, status: :created, include: ["posts", "discussions"]
    # end
    def me 
        if current_user 
            render json: current_user, status: :ok
        else 
            render json: "Not authenticated", status: :unauthorized
        end
    end
    def index
        render json: User.all, status: :ok
    end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
      end

    def destroy
        destroy_user = User.find(params[:id])
        destroy_user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:user_name, :password, :img_url, :user_bio, :user_link)
    end
    def create_issue(issue)
        render json: { errors: issue.record.errors.full_messages }, status: :unprocessable_entity
         end
   



end
