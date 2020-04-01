class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        weight = params[:user][:weight].to_f
        bf = params[:user][:body_fat_percentage].to_f
        fm = ((bf/100) * weight).round(1)
        lm = (weight - fm).round(1)
        age = age(params[:user][:dob])
        height = height(params[:user][:height])
        new_params = {
            age: age,
            converted_height: height
        }
        @user = User.new(user_params.merge(new_params))
        if @user.save
            weightlog = WeightLog.new(user_id: @user.id, date: Date.today(), body_fat_percentage: params[:user][:body_fat_percentage], weight: params[:user][:weight], lean_mass: lm, fat_mass: fm)
            if !weightlog.save
                render json: weightlog.errors.full_messages, status: 422
                return
            end
            login(@user)
            render :show
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def age(date_of_birth) 
       ((Time.zone.now - date_of_birth.to_time) / 1.year.seconds).floor
    end

    def height(height)
        feet = height.to_i / 12
        inches = height.to_i % 12
        converted_height = feet.to_s + "'" + inches.to_s + '"'
        return converted_height
    end

    def user_params
        params.require(:user).permit(:username, :password, :name, :dob, :height, :converted_height, :age)
    end
end
