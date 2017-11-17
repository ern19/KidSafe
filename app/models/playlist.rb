class Playlist < ApplicationRecord
  validates :name, presence: true
  validates :embed_URL, presence: true
  belongs_to :kid
end
