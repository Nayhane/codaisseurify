function submitSong(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  createSong($("#song_name").val(), $("#song_artist_id").val());
  $("#song_name").val(null);
}


function createSong(name, artist_id){
    let newSong = {name: name}


  $.ajax({
    type: "POST",
    url: "/api/artists/" + artist_id + "/songs.json",
    data: JSON.stringify({
        song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);


    let songId = data.id;

    let button = $('#button').on('click', '#btn_a', function(){
     console.log(this.value);
 });


    let listItem = $('<li class="song_list"></li>')
    .attr('id', songId)
    .html(name);


    $("#song_list").append(listItem).append(button);


  })

  .fail(function(error) {
  console.log(error)
  error_message = error.responseJSON.name[0];
  showError(error_message);
});

}


// function destroySong(event) {
//   event.preventDefault();
//   $.when($("click").remove())
// // }
// function deleteSong(event) {
//   event.preventDefault();
//
//   let deleteItems = document.getElementById('delete');
// }
//
// function destroySong(songId){
//   $.ajax({
//     type: "DELETE",
//     url: "/api/artists/" + artist_id + "/songs.json",
//     contentType: "application/json",
//     dataType: "json"
//   })
//
//   .done(function(data) {
//     $('tr[data-id="' + songId +'"]').remove();
//   });
// }



$(document).ready(function() {
    $("form").bind('submit', submitSong);
    $("#delete").bind('click', destroySong);

});
