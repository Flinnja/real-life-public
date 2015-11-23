class Task < ActiveRecord::Base
  belongs_to :habit

  validates :status, presence: true
  validates :activity, presence: true
  validates :date, presence: true
  validate :date_cannot_be_in_the_past

  def date_cannot_be_in_the_past
    errors.add(:date, "can't be in the past") if
      !date.blank? and date < Date.today
  end
end
