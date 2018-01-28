function submitSong(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  createSong($("#song_name").val(), $("#song_artist_id").val());
  $("#song_name").val(null);
}

function createSong(name, artist_id){

  let newSong = {name: name};

  $.ajax({
    type: "POST",
    url: "/api/artists/" + artist_id + "/songs.json",
    data: JSON.stringify({
      song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })

.done(function(data){
  console.log(data);

  let songId = data.id;

  let button = $('#button').on('click', '#btn_a', function(){
    console.log(this.value);
 });

  let listItem = $('<li class="song_list"></li>')
  .attr('id', songId)
  .html(name)


  $("#song_list").append(listItem).append(button);


})
.fail(function(error) {
    console.log(error)
    error_message = error.responseJSON.title[0];
    showError(error_message);
  });
}


function destroySong(event){
  event.preventDefault();
  deleteSong($("#button"));


.done(function(data){
    console.log(data);

let songId = data.id;

let deleteBtn = $('<button></button>')
.attr('id', songId)
.val('id_song')
.bind('click', deleteSong)
.html('Delete')


function(index, deleteBtn){
  SongId = $(listItem).data('id');
  deleteSong(songId);
});

 $.ajax({
   type: "DELETE",
   url: "/api/artists/" + artist_id + "/songs/" + song_id + ".json",
   data: JSON.stringify({
     song: newSong
   }),
   contentType: "application/json",
   dataType: "json"

 })
}



$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#button").bind('onclick', destroySong);
});
