$( document ).ready(function() {
//news
  $('#news').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: "http://content.guardianapis.com/search?page-size=50&api-key=bcc713f7-cd86-40ea-9437-1510a468cd34",
      method: 'GET'
    }).done(function(response) {

      var newsCollection = response.response.results

      var firstThree = newsCollection.slice(0,3);
      var secondThree = newsCollection.slice(4,7);
      var thirdThree = newsCollection.slice(8,11);
      var fourthThree = newsCollection.slice(12,15);
      var fifthThree = newsCollection.slice(16,19);
      var sixthThree = newsCollection.slice(20,23);
      var sevenThree = newsCollection.slice(24,27);
      var eightThree = newsCollection.slice(28,31);
      var nineThree = newsCollection.slice(32,35);
      var tenThree = newsCollection.slice(38,41);
      var elevenThree = newsCollection.slice(42,45);
      var twelveThree = newsCollection.slice(46,49);


      var articleCollection = [secondThree, thirdThree, fourthThree, fifthThree, sixthThree, sevenThree, eightThree, nineThree, tenThree, elevenThree, twelveThree];

      var loopArticles = function(article) {
        for (var i = 0; i < article.length; i++ ) {
          console.log(article[i]);
          var $newsTitle = $('<p>').html(article[i].webTitle).attr('class','title');
          var $articleLink = $('<a>').attr({
            href:article[i].webUrl,
            class: 'link'
          }).html('Link To Article');
          $('#showContent').append($newsTitle).append($articleLink);
        }
      }

      loopArticles(firstThree);

      var $contentPara = $('<p>');

      $('#showContent').append($contentPara);
      $('#category').html('News');

      var index = 0
      $('body').on('click','#category-next', function() {
        if (index < 11) {
          $('.title').empty();
          $('.link').empty();
          loopArticles(articleCollection[index]);
          index++;
        }
      });
    });
  });
});
