FactoryGirl.define do
  factory :habit do
    trait :valid do
      name "Running"
      description "Run every day to get better at running"
      start_date Date.today+1
      end_date Date.today+5
      frequency 1
      user_id 1
    end
    trait :invalid do
      name ""
      description ""
      start_date ""
      end_date ""
      frequency ''
      user_id 1
    end
  end

end
