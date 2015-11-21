FactoryGirl.define do
  factory :user do
    trait :valid do
      email "valid@valid.com"
      password "iamapassword1A"
    end
    trait :invalid do
      email "notvalid"
      password "short"
    end
  end
end
