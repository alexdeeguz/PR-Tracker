class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        weight = params[:user][:weight].to_f
        bf = params[:user][:body_fat_percentage].to_f
        fm = ((bf/100) * weight).round(1)
        lm = (weight - fm).round(1)
        debugger
        if @user.save
            login(@user)
            debugger
            WeightLog.create(user_id: @user.id, date: Date.today(), body_fat_percentage: params[:user][:body_fat_percentage], weight: params[:user][:weight], lean_mass: lm, fat_mass: fm)
            debugger
            render :show
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:username, :password, :name, :dob, :height)
    end
end
