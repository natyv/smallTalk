$( document ).ready(function() {

  $('.yesno').on('click', function () {
    $('#showContent').empty();
    $.ajax({
      url: 'http://yesno.wtf/api/',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      $('#showContent').empty();

      var $img = $('<img>').attr('src', response.image).addClass('gifImage');
      $('#showContent').append($img);
      $('#category').html('Yes/No');
    });
  });
});
