# == Schema Information
#
# Table name: personal_records
#
#  id         :bigint           not null, primary key
#  date       :date
#  weight     :integer
#  reps       :integer
#  exercise   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class PersonalRecord < ApplicationRecord
    validates :date, :weight, :exercise, :user_id, :reps, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
