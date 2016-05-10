$( document ).ready(function() {
//giphy
  $('#giphy').on('click', function () {
    $('#show').empty();

    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response.data.image_original_url)
      var $img = $('<img>').attr('src', response.data.image_original_url);
      $('#show').append($img);
    });
  });
});
