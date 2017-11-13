class KidsController < ApplicationController
    before_action :authenticate_parent!
  
    def index
      @kids = current_parent.kids
  
      render json: @kids
    end
  
    def show
      @kid = Kid.find(params[:id])
  
      render json: @kid
    end
  
    def create
      @parent = current_parent
      @kid = @parent.kids.build(kid_params)
  
      if @parent.save
        render json: @kid, status: :created, location: @kid
      else
        render json: @kid.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @kid = Kid.find(params[:id])
  
  
      if @kid.update(kid_params)
        render json: @kid
      else
        render json: @kid.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @kid = Kid.find(params[:id]).delete
  
      render status: :ok
    end
  
    private
  
    def kid_params
      params.require(:kid).permit(:nickname, :profile_pic)
    end
  end