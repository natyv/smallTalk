module Api
  class SmalltalksController < ApplicationController

    def index
      @smalltalks = Smalltalk.all
      render json: @smalltalks.to_json
    end


  end
end
