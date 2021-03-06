# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  username         :string
#  password_digest  :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  session_token    :string
#  name             :string
#  dob              :date
#  height           :integer
#  age              :integer
#  converted_height :string
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, :name, :dob, :height, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token


    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user && user.is_password?(password)
        nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    has_many :weight_logs,
        foreign_key: :user_id,
        class_name: :WeightLog

    has_many :personal_records,
        foreign_key: :user_id,
        class_name: :PersonalRecord
end
