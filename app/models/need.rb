class Need < ActiveRecord::Base
  belongs_to :user

  # def calculate_average(need, rating)
  #   need = (need + rating) / 2
  #   return need
  # end

end
