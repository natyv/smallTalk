$( document ).ready(function() {

  $('#smalltalks').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: 'http://localhost:3000/api/smalltalks',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {

      var rand = response[Math.floor(Math.random() * response.length)];

      console.log(rand.conversation)
      $('#showContent').empty();
      $('#showContent').html(rand.conversation);

    });
  });
});
