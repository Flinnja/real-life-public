class Habit < ActiveRecord::Base
  belongs_to :user
  has_many :tasks
  validates :name, length: {minimum: 3}
  validates :frequency, presence: true
  validates :start_date, presence: true
  validate :start_date_cannot_be_in_the_past
  validate :end_date_cannot_be_before_start_date

  after_initialize :init

  def check_schedule
    if(self.next_date == Date.today)
      self.next_date += frequency
      return true
    else
      return false
    end
  end

  def init
    self.next_date = self.start_date
  end

  def start_date_cannot_be_in_the_past
    errors.add(:start_date, "can't be in the past") if
      !start_date.blank? and start_date < Date.today
  end

  def end_date_cannot_be_before_start_date
    errors.add(:end_date, "can't be before start date") if
      !end_date.blank? and end_date < start_date
  end
end
