$( document ).ready(function() {
//news
  $('#news').on('click', function () {
    $('#showContent').empty();
    var pageSize = 1

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
          var $para = $('<p>').html(article[i].webTitle);
          var $link = $('<a>').attr('href', article[i].webUrl).html('Link To Article');
          $('#showContent').append($para).append($link);
        }
      }

      loopArticles(firstThree);

      var index = 0
      $('#next').on('click', function() {
        if (index < 11) {
          $('#show').empty()
          loopArticles(articleCollection[index]);
          index++;
        } else {
          var $error = $('<p>').html('Sorry No More News For Now');
          $('#showContent').empty()
          $('#showContent').append($error);
        }
      });
    });
  });
});
