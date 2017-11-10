class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :embed_URL
      t.references :kid, foreign_key: true

      t.timestamps
    end
  end
end
