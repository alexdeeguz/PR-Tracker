class AddHeightAndAgeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer
    add_column :users, :converted_height, :string
  end
end
