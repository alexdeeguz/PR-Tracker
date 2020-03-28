class CreateWeightLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :weight_logs do |t|
      t.integer :user_id
      t.date :date
      t.decimal :body_fat_percentage
      t.decimal :weight
      t.decimal :lean_mass
      t.decimal :fat_mass

      t.timestamps
    end
  end
end
