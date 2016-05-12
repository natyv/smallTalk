$( document ).ready(function() {

  $('.yesno').on('click', function () {
    $('#showContent').empty();
    $.ajax({
      url: 'http://yesno.wtf/api/',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      $('#showContent').empty();
      console.log(response);
      $('#showContent').html(response.answer);

      var $img = $('<img>').attr('src', response.image);
      $('#showContent').append($img);
      $('#category').html('Yes/No');
    });
  });
});
