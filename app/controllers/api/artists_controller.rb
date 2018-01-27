class Api::ArtistsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    artist = Artist.all
    render status: 200, json: artist
  end

  def show
    artist = Artist.find(params[:id])
    render status: 200, json: artist

  end

  def destroy
    artist = Artist.find(params[:id])
    artist.destroy

    render status: 200, json: {
      message: "Artist successfully deleted"
    }.to_json
  end

end
