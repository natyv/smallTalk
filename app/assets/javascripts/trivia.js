$( document ).ready(function() {
//xkcd
  $('#trivia').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: 'http://jservice.io/api/random',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response)
      $('#showContent').empty();
      $('#showContent').html(response[0].question);

    });
  });
});
