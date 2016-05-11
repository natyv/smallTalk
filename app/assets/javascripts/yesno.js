$( document ).ready(function() {
//cats api
  $('#yesno').on('click', function () {
    console.log(this)
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
