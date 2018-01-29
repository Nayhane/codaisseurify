class Api::SongsController < Api::BaseController
  before_action :set_artist

  def create
    song = @artist.songs.new(song_params)

    if song.save
      render status: 200, json:{
        message: "New songs added",
        artist: @artist,
        song: song
      }.to_json
    else
      render status: 422, json:{
        errors: song.errors
      }.to_json
    end
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy

    render status: 200, json: {
      message: "Song successfully deleted"
    }.to_json
  end

  def delete_all
    @artist.songs.destroy_all
  end


private

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

  def song_params
    params.require(:song).permit(:name)
  end


end
