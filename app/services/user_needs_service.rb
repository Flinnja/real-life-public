class UserNeedsService
  def self.create_needs(actor: actor)
    Need.create({
      user_id: actor.id,
      goals_average: 5,
      diet_average: 5,
      exercise_average: 5,
      sleep_average: 5,
      social_average: 5})
  end
end
