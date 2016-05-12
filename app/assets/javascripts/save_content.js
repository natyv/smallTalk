
$(function(){
    $('#like').on('click', function(){
    console.log('clicked');

      var topic = $("#category").text();
      var userId = $('#user_id').text();

      if (topic === "Giphy" || topic === "Yes/No"){

        var imgSrc = $('.gifImage').attr('src');

        $.ajax({
          url: '/favourites',
          method: 'post',
          data: {content: imgSrc, user_id: userId, category: topic}
        }).done(function(response){
          console.log(response);
        });

      } else if (topic === "News") {

          var links = [];

          $('.linkNews').each (function() {
            links.push($(this).attr('href'));
            links.push($(this).text());

          });

          var arrLinks = JSON.stringify(links);
          console.log(links)
          $.ajax({
            url: '/favourites',
            method: 'post',
            data: {content: arrLinks, user_id: userId, category: topic}
          }).done(function(response){
            console.log(response);
          });


      } else if (topic === "Reddit") {

          var links = [];

          $('.linkReddit').each (function() {
            links.push($(this).attr('href'));
            links.push($(this).text());
          });

          var arrLinks = JSON.stringify(links);

          $.ajax({
            url: '/favourites',
            method: 'post',
            data: {content: arrLinks, user_id: userId, category: topic}
          }).done(function(response){
            console.log(response);
          });


      }else {

          var save_data = $("#showContent").text();
          var userId = $('#user_id').text();
          console.log(userId);
          $.ajax({
            url: '/favourites',
            method: 'post',
            data: {content: save_data, user_id: userId, category: topic}
          }).done(function(response){
            console.log(response);
          });
      }

      });

});
