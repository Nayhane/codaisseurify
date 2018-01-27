class SongsController < ApplicationController
  before_action :load_artist


  def new
     @song = Song.new
  end

  def create
    @song = @artist.songs.new(song_params)

    if @song.save
      redirect_to @artist.find(params[:id]), notice: "Added Song"
    else
      render :create
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy

    redirect_to artists_path
  end


private

  def load_artist
    @artist = Artist.find(params[:artist_id])
  end

  def song_params
    params.require(:song).permit(:name)
  end

end
