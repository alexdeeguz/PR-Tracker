class AddUserIdToPersonalRecord < ActiveRecord::Migration[5.2]
  def change
    add_column :personal_records, :user_id, :integer
  end
end
