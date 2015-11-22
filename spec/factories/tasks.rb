FactoryGirl.define do
  factory :task do
    trait :valid do
      activity "Lift heavy things"
      date Date.today+1
      status "Pending"
    end
    trait :invalid do
      activity ''
      date '1999-11-11'
      status ''
    end
  end
end
