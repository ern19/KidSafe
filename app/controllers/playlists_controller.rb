class PlaylistsController < ApplicationController
    def index
        @playlists = Kid.find(params[:kid_id]).playlists
        render json: @playlists
    end

    def show
        @playlist = Playlist.find(params[:id])
        render json: @playlist
    end

    def create
        @kid = Kid.find(params[:kid_id])
        @playlist = Playlist.new(playlist_params)
        @kid.playlists << @playlist
        @kid.save!
        render json: @playlist 
    end

    def destroy
        @playlist = Playlist.find(params[:id]).delete
        render status: :ok 
    end

    private

    def playlist_params
        params.require(:playlist).permit(:name, :embed_URL)
    end
end
