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
    trait :today do
      name "Lift 3 tins"
      description "Put the tins in hands and move them up then down again"
      start_date Date.today
      end_date Date.today+7
      frequency 1
      user_id 1
    end
    trait :tomorrow do
      name "Run"
      description "If I run the guy with tins wont be able to catch me"
      start_date Date.today+1
      end_date Date.today+7
      frequency 1
      user_id 1
    end
  end

end
