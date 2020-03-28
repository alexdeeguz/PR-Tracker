class Api::WeightLogsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        currentUser = User.where(id: params[:user_id].to_i).first
        @weight_logs = currentUser.weight_logs.order('date')
        render :index
    end

    def create
        @weight_log = WeightLog.new(weight_log_params)
        if @weight_log.save
            render :show
        else  
            render json: @weight_log.errors.full_messages
        end
    end

    def destroy

    end

    def weight_log_params
        params.require(:weight_log).permit(:user_id, :date, :weight, :body_fat_percentage, :fat_mass, :lean_mass)
    end
end
