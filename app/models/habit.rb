class Habit < ActiveRecord::Base
  belongs_to :user
  has_many :tasks
  validates :name, length: {minimum: 3}
  validates :frequency, presence: true
  validates :start_date, presence: true
  validate :start_date_cannot_be_in_the_past

  after_initialize :init

  def check_schedule
    if(self.next_date == Date.today)
      self.next_date += frequency
    end
  end

  def init
    self.next_date = self.start_date
    self.check_schedule
  end

  def start_date_cannot_be_in_the_past
    errors.add(:start_date, "can't be in the past") if
      !start_date.blank? and start_date < Date.today
  end
end
