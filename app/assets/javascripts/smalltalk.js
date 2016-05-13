$( document ).ready(function() {

  $('.smalltalks').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: '/api/smalltalks',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {

      var rand = response[Math.floor(Math.random() * response.length)];

      $('#showContent').empty();
      $('#showContent').html(rand.conversation);
      $('#category').html('Small Talk');

    });
  });
});
