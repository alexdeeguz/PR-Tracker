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
require 'test_helper'

class WeightLogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
