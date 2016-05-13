$( document ).ready(function() {

  $('.trivia').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: 'http://jservice.io/api/random',
      dataType: "json",
      method: 'GET'

    }).done(function(response) {
      $('#showContent').empty();
      $('#showContent').html(response[0].question);

      var $contentPara = $('<p>').addClass("trivia-p").css("padding-top","10px");


      var $button = $('<button>Reveal Answer</button>').attr('id','answerBtn').addClass("btn waves-light orange trivia-btn");

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
