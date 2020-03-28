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
#
require 'test_helper'

class PersonalRecordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
