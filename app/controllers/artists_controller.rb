class ArtistsController < ApplicationController
  before_action :load_artist, only: [:show, :destroy]

  def index
    @artists = Artist.all
  end


  def show
    @artist = Artist.find(params[:id])

  end

  def destroy
    @artist = Artist.find(params[:id])

    @artist.destroy

    redirect_to artists_path
  end

private

  def artist_params
    params.require(:artist).permit(:name)
  end


  def load_artist
    @artist = Artist.find(params[:id])
  end
end
