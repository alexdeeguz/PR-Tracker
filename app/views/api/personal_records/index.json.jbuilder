@@personal_records.each do |record|
    json.set! record.id do
        json.extract! record, :id, :date, :weight, :exercise, :reps
    end
end