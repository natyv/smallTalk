$( document ).ready(function() {

  $('#category-next').on('click', function() {

    if ($('#category').html() === 'Cats') {
        $('#showContent').empty();
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

    } else if ($('#category').html() === 'Number Facts') {
        $('#showContent').empty();

        $.ajax({
          url: "http://numbersapi.com/random/trivia/?json",
          dataType: "json",
          method: 'GET'

        }).done(function(response) {
          $('#showContent').html(response.text);
          $('#category').html('Number Facts');
        });

    } else if ($('#category').html() === 'Random Facts') {
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

    } else if ($('#category').html() === 'Trivia') {
        $('#showContent').empty();
        $.ajax({
          url: 'http://jservice.io/api/random',
          dataType: "json",
          method: 'GET'

        }).done(function(response) {

          $('#showContent').html(response[0].question);

          var $contentPara = $('<p>').addClass("trivia-p").css("padding-top","10px");


          var $button = $('<button>Reveal Answer</button>').attr('id','answerBtn').addClass("btn waves-light orange trivia-btn");

          var $ansContent = $('<p>').attr('id','answerPara');

          $contentPara.append($button);
          $contentPara.append($ansContent);
          $('#showContent').append($contentPara);
          $('#category').html('Trivia');

          $('#answerBtn').on('click',function() {
            var $answer = $('<p>').html(response[0].answer);
            $('#answerPara').html($answer);

          });

        });

    } else if ($('#category').html() === 'Giphy') {

        $('#showContent').empty();

        $.ajax({
          url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
          dataType: "json",
          method: 'GET'

        }).done(function(response) {
          console.log(response.data.image_original_url)
          var $img = $('<img>').attr('src', response.data.image_original_url);
          $('#showContent').append($img);
          $('#category').html('Giphy');
        });

    } else if ($('#category').html() === 'Small Talk') {

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
          $('#category').html('Small Talk');

        });

    } else if ($('#category').html() === 'Yes/No') {
          $('#showContent').empty();

          $.ajax({
            url: 'http://yesno.wtf/api/',
            dataType: "json",
            method: 'GET'

          }).done(function(response) {

            var $img = $('<img>').attr('src', response.image);
            $('#showContent').append($img);
            $('#category').html('Yes/No');
          });
    }

  });

});
