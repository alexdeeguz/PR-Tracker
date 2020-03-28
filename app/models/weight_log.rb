# == Schema Information
#
# Table name: weight_logs
#
#  id                  :bigint           not null, primary key
#  user_id             :integer
#  date                :date
#  body_fat_percentage :decimal(, )
#  weight              :decimal(, )
#  lean_mass           :decimal(, )
#  fat_mass            :decimal(, )
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class WeightLog < ApplicationRecord

  validates :user_id, :date, :weight, :body_fat_percentage, presence: true
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
