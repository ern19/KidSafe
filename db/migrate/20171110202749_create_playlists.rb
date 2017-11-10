class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :embed_URL
      t.kid :references

      t.timestamps
    end
  end
end
