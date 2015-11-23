FactoryGirl.define do
  factory :user do
    trait :valid do
      email "valid@valid.com"
      password "iamapassword1A"
      name "Flinn"
    end
    trait :invalid do
      email "notvalid"
      password "short"
      name "I"
    end
  end
end
