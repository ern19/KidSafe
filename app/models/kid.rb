class Kid < ApplicationRecord
  belongs_to :parent
  has_many :playlists
end
