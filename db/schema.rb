# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_01_220826) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "personal_records", force: :cascade do |t|
    t.date "date"
    t.integer "weight"
    t.integer "reps"
    t.string "exercise"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token"
    t.string "name"
    t.date "dob"
    t.integer "height"
    t.integer "age"
    t.string "converted_height"
  end

  create_table "weight_logs", force: :cascade do |t|
    t.integer "user_id"
    t.date "date"
    t.float "body_fat_percentage"
    t.float "weight"
    t.float "lean_mass"
    t.float "fat_mass"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
