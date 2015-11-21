FactoryGirl.define do
  factory :habit do
    trait :valid do
      name "Running"
      description "Run every day to get better at running"
      start_date "01-12-2016"
      end_date "31-12-2016"
      frequency "Daily"
      user_id 1
    end
    trait :invalid do
      name ""
      description ""
      start_date ""
      end_date ""
      frequency "bananas"
      user_id 1
    end
  end

end
