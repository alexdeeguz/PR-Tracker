class Api::PersonalRecordsController < ApplicationController

    skip_before_action :verify_authenticity_token
    
    def index
        currentUser = User.where(id: params[:user_id].to_i).first
        @personal_records = currentUser.personal_records
        render :index
    end

    def create
        @personal_record = PersonalRecord.new(personal_record_params)
        if @personal_record.save
            render :show
        else  
            render json: @personal_record.errors.full_messages
        end
    end

    def destroy

    end

    def personal_record_params
        params.require(:personal_record).permit(:user_id, :date, :weight, :exercise, :reps)
    end
end
