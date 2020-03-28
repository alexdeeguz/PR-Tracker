class ChangeColumnTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :weight_logs, :weight, :float
    change_column :weight_logs, :body_fat_percentage, :float
  end
end
