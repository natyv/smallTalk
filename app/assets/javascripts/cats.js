$( document ).ready(function() {
//cats api
  $('#cats').on('click', function () {
    $.ajax({
      url: 'http://cors.io/?u=http://catfacts-api.appspot.com/api/facts',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      $('#showContent').empty();
      console.log(response.facts[0])
      $('#showContent').html(response.facts[0]);
      $('#category').html('Cats');
    });
  });
});
