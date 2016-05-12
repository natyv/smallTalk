$( document ).ready(function() {
//news
  $('#news').on('click', function () {
    $('#showContent').empty();

    $.ajax({
      url: "http://content.guardianapis.com/search?page-size=50&api-key=bcc713f7-cd86-40ea-9437-1510a468cd34",
      method: 'GET'
    }).done(function(response) {

      var newsCollection = response.response.results

      var firstThreeNews = newsCollection.slice(0,3);
      var secondThreeNews = newsCollection.slice(4,7);
      var thirdThreeNews = newsCollection.slice(8,11);
      var fourthThreeNews = newsCollection.slice(12,15);
      var fifthThreeNews = newsCollection.slice(16,19);
      var sixthThreeNews = newsCollection.slice(20,23);
      var sevenThreeNews = newsCollection.slice(24,27);
      var eightThreeNews = newsCollection.slice(28,31);
      var nineThreeNews = newsCollection.slice(32,35);
      var tenThreeNews = newsCollection.slice(38,41);
      var elevenThreeNews = newsCollection.slice(42,45);
      var twelveThreeNews = newsCollection.slice(46,49);


      var articleCollection = [secondThreeNews, thirdThreeNews, fourthThreeNews, fifthThreeNews, sixthThreeNews, sevenThreeNews, eightThreeNews, nineThreeNews, tenThreeNews, elevenThreeNews, twelveThreeNews];

      var loopArticles = function(article) {
        for (var i = 0; i < article.length; i++ ) {
          console.log(article[i]);
          var $newsTitle = $('<p>').html(article[i].webTitle).attr('class','titleNews');
          var $articleLink = $('<a>').attr({
            href:article[i].webUrl,
            class: 'linkNews'
          }).html('Link To Article');
          $('#showContent').append($newsTitle).append($articleLink);
        }
      }

      loopArticles(firstThreeNews);

      var $contentPara = $('<p>');

      $('#showContent').append($contentPara);
      $('#category').html('News');

      var index = 0
      $('#category-next').on('click', function() {

        if (index < 11 && $('#category').html() === 'News') {

          $('.titleNews').remove();
          $('.linkNews').remove();
          loopArticles(articleCollection[index]);
          index++;
        }
      });
    });
  });
});
