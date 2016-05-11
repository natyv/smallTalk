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

      var $contentPara = $('<p>');

      var $button = $('<button>Answer</button>').attr('id','answerBtn');

      var $ansContent = $('<p>').attr('id','answerPara')

      $contentPara.append($button);
      $contentPara.append($ansContent);
      $('#showContent').append($contentPara);
      $('#category').html('Trivia');

      $('#answerBtn').on('click',function() {
        var $answer = $('<p>').html(response[0].answer);
        $('#answerPara').html($answer);

      });

    });
  });
});
