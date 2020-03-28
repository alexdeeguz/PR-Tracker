class CreatePersonalRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :personal_records do |t|
      t.date :date
      t.integer :weight
      t.integer :reps
      t.string :exercise

      t.timestamps
    end
  end
end
