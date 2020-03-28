class ChangeFatMassLeanMassColumnTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :weight_logs, :fat_mass, :float
    change_column :weight_logs, :lean_mass, :float
  end
end
