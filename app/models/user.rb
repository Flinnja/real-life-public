class User < ActiveRecord::Base

  has_many :habits
  validates :name, length: {minimum: 2}


  after_initialize :init

  def init
    Need.create({
      user_id: self.id,
      goals_average: 5,
      diet_average: 5,
      exercise_average: 5,
      sleep_average: 5,
      social_average: 5})
  end


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def last_habit
    habits.last
  end
end
