$(function(){

  $('#logout').on('click', function(event){
    console.log("I'm wworking")
    event.preventDefault();
    event.stopPropagation();
    $.ajax({
      url: '/signout',
      method: 'DELETE',
      success: function(){
        location.reload();
      }
  });
  });
});
