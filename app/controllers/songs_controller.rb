class SongsController < ApplicationController
  before_action :load_artist


  def create
    @song = @artist.songs.new(song_params)

    if @song.save
      redirect_to @song, notice: "Added Song"
    else
      render :create
    end
  end

  def destroy
    @song = Song.find(paramns[:id])
    @song.destroy

    redirect_to artists_path
  end


private

  def load_artist
    @artist = Artist.find(params[:id])
  end

  def song_params
    params.require(:song).permite(:name)
  end

end
