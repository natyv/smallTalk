
$(function(){
    $('#like').on('click', function(){
    console.log('clicked');

      var category = $("#category").html();
      var userId = $('#user_id').text();

      if (category === "Giphy" || category === "Yes/No"){

        var imgSrc = $('.gifImage').attr('src');
        console.log(imgSrc);

        $.ajax({
          url: '/favourites',
          method: 'post',
          data: {content: imgSrc, user_id: userId, category: category}
        }).done(function(response){
          console.log(response);
        });

      } else if (category === "News" || category ===  "Reddit") {

          var links = [];

          $("a").each (function() {
            if ($(this).hasClass('linkNews') || $(this).hasClass('linkReddit') ) {
              links.push(($(this).attr('href')));
            }
          })

          $.ajax({
            url: '/favourites',
            method: 'post',
            data: {content: links, user_id: userId, category: category}
          }).done(function(response){
            console.log(response);
          });


      } else {

          var save_data = $("#showContent").text();
          var userId = $('#user_id').text();
          console.log(userId);
          $.ajax({
            url: '/favourites',
            method: 'post',
            data: {content: save_data, user_id: userId, category: category}
          }).done(function(response){
            console.log(response);
          });
      }

      });

});
