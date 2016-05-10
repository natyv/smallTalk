$( document ).ready(function() {
//randomfacts
  $('#random').on('click', function () {
    $('#show').empty();
    var randomNumber = Math.floor((Math.random() * 1500) + 1);

    $.ajax({
      url: "http://mentalfloss.com/api/1.0/views/amazing_facts.json?id="+ randomNumber,
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response[0].nid)
      $('#show').html(response[0].nid);
    });
  });
});
