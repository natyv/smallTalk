
$(function(){
$('#like').on('click', function(){
  console.log('clicked');
  var category = $("#category").html();
  if (category === "Giphy" || category === "Yes/No"){
    

  }
  var save_data = $("#showContent").text();
  var userId = $('#user_id').text();
  console.log(userId);
  $.ajax({
    url: '/favourites',
    method: 'post',
    data: {content: save_data, user_id: userId}
  }).done(function(response){
    console.log(response);
  });
});

});
