$( document ).ready(function() {
//xkcd
  $('#xkcd').on('click', function () {
    $('#show').empty();
    var randomNumber = Math.floor((Math.random() * 1500) + 1);

    $.ajax({
      url: "http://crossorigin.me/http://xkcd.com/"+ randomNumber + "/info.0.json",
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response.img)
      var $img = $('<img>').attr('src', response.img);
      $('#show').append($img);
    });
  });
});
