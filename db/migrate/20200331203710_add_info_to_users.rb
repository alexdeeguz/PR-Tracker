class AddInfoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :dob, :date
    add_column :users, :height, :integer
  end
end
