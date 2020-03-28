# == Schema Information
#
# Table name: weight_logs
#
#  id                  :bigint           not null, primary key
#  user_id             :integer
#  date                :date
#  body_fat_percentage :float
#  weight              :float
#  lean_mass           :float
#  fat_mass            :float
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
require 'test_helper'

class WeightLogTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
