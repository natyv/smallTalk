$( document ).ready(function() {
//cats api
  $('#cats').on('click', function () {
    $.ajax({
      url: 'http://crossorigin.me/http://catfacts-api.appspot.com/api/facts',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response.facts[0])
      $('#show').html(response.facts[0]);
    });
  });
});
