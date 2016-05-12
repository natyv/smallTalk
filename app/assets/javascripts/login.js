$(function(){

  $('#login').on('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    $.ajax({
      url: '/signin',
      method: 'POST',
      data : {
        email: $('.email').val(),
        password: $('.password').val(),
        authenticity_token: $('#authenticity_token').val()
      },
      success: function(){
         location.reload();
         
        // Check if the user is viewing a topic - if so - reload with an intent.
        // if($('.results-container').length > 0){
        //   window.location = '/?view=1';}

      }
  });
  });
});
