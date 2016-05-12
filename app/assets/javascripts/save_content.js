
$(function(){
$('#like').on('click', function(){
  console.log('clicked');
  var save_data = $("#showContent").text();

  $.ajax({
    url: '/favourites',
    method: 'post',
    data: {content: save_data}
  }).done(function(response){
    console.log(response);
  });
});

});
