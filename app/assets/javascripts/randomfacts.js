$( document ).ready(function() {
//randomfacts
  $('#randomFacts').on('click', function () {
    $('#showContent').empty();
    var randomNumber = Math.floor((Math.random() * 1500) + 1);

    $.ajax({
      url: "http://mentalfloss.com/api/1.0/views/amazing_facts.json?id="+ randomNumber,
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response[0].nid)
      $('#showContent').html(response[0].nid);
      $('#category').html('Random Facts');
    });
  });
});
