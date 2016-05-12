$( document ).ready(function() {

    $('.reddit').on('click', function () {
      $('#showContent').empty()

      $.ajax({
        url: 'https://www.reddit.com/.json',
        dataType: "json",
        method: 'GET'

      }).done(function(response) {
        console.log(response)
        var redditHot = response.data.children;

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

            var $redditTitle = $('<p>')

            var $articleLink = $('<a>').attr({
                href:article[i].data.url,
                class: 'linkReddit'
              }).html(article[i].data.title);
              $redditTitle.append($articleLink)

            $('#showContent').append($redditTitle);
          }
        }

        loopReddit(firstThree);

        var $contentPara = $('<p>');

        $('#showContent').append($contentPara);
        $('#category').html('Reddit');

        var indexRed = 0
        $('#category-next').on('click', function() {
          if (indexRed < 5 && $('#category').html() === 'Reddit') {
            $('.titleReddit').remove();
            $('.linkReddit').remove();

            loopReddit(redditCollection[indexRed]);
            indexRed++;
          }
        });
      });
    });

});
