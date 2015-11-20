class Habit < ActiveRecord::Base
  belongs_to :user
  has_many :tasks
  validates :name, length: {minimum: 3}
  validates :frequency, length: {minimum: 1}
  validates :start_date, presence: true
  validate :start_date_cannot_be_in_the_past

  def start_date_cannot_be_in_the_past
    errors.add(:start_date, "can't be in the past") if
      !start_date.blank? and start_date < Date.today
  end
end
