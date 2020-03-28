@weight_logs.each do |weight_log|
    json.set! weight_log.id do
        json.extract! weight_log, :id, :date, :weight, :body_fat_percentage, :lean_mass, :fat_mass
    end
end