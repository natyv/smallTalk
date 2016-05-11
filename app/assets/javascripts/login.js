$(function(){
  console.log('HELLO!');
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
      }
  });
  });
});
