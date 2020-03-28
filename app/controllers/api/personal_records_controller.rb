class Api::PersonalRecordsController < ApplicationController

    def index
        currentUser = User.where(id: params[:user_id].to_i).first
        @personal_records = currentUser.personal_records
        render :index
    end

    def create
        
    end

    def destroy

    end

    def personal_record_params
        params.require(:personal_record).permit(:date, :weight, :exercise, :reps)
    end
end
