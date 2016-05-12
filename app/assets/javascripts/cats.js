$( document ).ready(function() {
//cats api
  $('.cats').on('click', function () {
    $('#showContent').empty();
    $.ajax({
      url: 'http://cors.io/?u=http://catfacts-api.appspot.com/api/facts',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response.facts[0])
      $('#showContent').html(response.facts[0]);
      $('#category').html('Cats');
      // localStorage.setItem('activeCategory', 'cats');
    });
  });
});
