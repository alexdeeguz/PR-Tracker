# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

WeightLog.destroy_all
PersonalRecord.destroy_all
User.destroy_all

u1 = User.create(username: 'demo_user', password: 'password', name: 'Demo User', dob: '1995-03-16', height: 75, age: 25, converted_height: "6" + "'" + "3" + "''")
fm = ((12.1/100) * 225).round(1)
lm = (225 - fm).round(1)
w1 = WeightLog.create(user_id: u1.id, date: '2020-04-01', weight: 225, body_fat_percentage: 12.1, lean_mass: lm, fat_mass: fm)
