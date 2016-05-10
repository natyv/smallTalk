$( document ).ready(function() {
//numbersfact
  $('#numbers').on('click', function () {
    var randomNumber = Math.floor((Math.random() * 1500) + 1);

    $.ajax({
      url: "http://numbersapi.com/" + randomNumber + "?json",
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response)
      $('#show').html(response.text);
    });
  });
});
