class Kid < ApplicationRecord
  validates :nickname, presence: true
  belongs_to :parent
  has_many :playlists, dependent: :destroy
end
