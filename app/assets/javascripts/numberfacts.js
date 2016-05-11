$( document ).ready(function() {
//numbersfact
  $('#numberFacts').on('click', function () {

    $.ajax({
      url: "http://numbersapi.com/random/trivia/?json",
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      console.log(response)
      $('#showContent').html(response.text);
      $('#category').html('Number Facts');
    });
  });
});
