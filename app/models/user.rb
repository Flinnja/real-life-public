class User < ActiveRecord::Base

  after_initialize :init

  def init
    Needs.create({
      user_id: self.id,
      goal_average: 5,
      diet_average: 5,
      exercise_average: 5,
      sleep_average: 5,
      social_average: 5})
  end

  # validates :name, length: {minimum: 2}
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
