$( document ).ready(function() {

    $('#reddit').on('click', function () {
      $('#showContent').empty()

      $.ajax({
        url: 'https://www.reddit.com/.json',
        dataType: "json",
        method: 'GET'

      }).done(function(response) {
        console.log(response)
        var redditHot = response.data.children;

        console.log(redditHot[0].data.title);
        console.log(redditHot[0].data.score);
        console.log(redditHot[0].data.url);

        var firstThree = redditHot.slice(0,3);
        var secondThree = redditHot.slice(4,7);
        var thirdThree = redditHot.slice(8,11);
        var fourthThree = redditHot.slice(12,15);
        var fifthThree = redditHot.slice(16,19);
        var sixthThree = redditHot.slice(20,23);
        var lastThree = redditHot.slice(24,25);

        var redditCollection = [secondThree, thirdThree, fourthThree, fifthThree, sixthThree];


        var loopReddit = function(article) {
          for (var i = 0; i < article.length; i++ ) {

            var $redditTitle = $('<p>').html(article[i].data.title).attr('class','title');

            var $redditScore =
             $('<p>').html('Score ' + article[i].data.score).attr('class','score');

            var $articleLink = $('<a>').attr({
                href:article[i].data.url,
                class: 'link'
              }).html('Link');

            $('#showContent').append($redditTitle).append($redditScore).append($articleLink);
          }
        }

        loopReddit(firstThree);

        var $contentPara = $('<p>');

        var $button = $('<button>Next</button>').attr('id','nextBtn');

        $('#showContent').append($contentPara);

        $contentPara.append($button)

        var index = 0
        $('#nextBtn').on('click', function() {
          if (index < 5) {
            $('.title').empty();
            $('.link').empty();
            $('.score').empty();

            loopReddit(redditCollection[index]);
            $contentPara.append($button)
            index++;
          } else {
            var $error = $('<p>').html('Sorry No More Reddit');
            $('#showContent').empty()
            $('#showContent').append($error);
          }
        });
      });
    });

});
