function submitSong(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  let songName = $("#song_name").val();
  let artistId = $("#song_artist_id").val();
  createSong(songName, artistId);
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

    let songId = data.song.id;


    let button = $('<button type="button"></button>')
    .val(songId)
    .bind("click", deleteSong)
    .html('Delete');


    let listItem = $('<li class="song_list"></li>')
    .attr('id', songId)
    .html(name)

    listItem.append(button);
    $("#song_list").append(listItem);


  })
  .fail(function(error) {
    console.log(error)
    error_message = error.responseJSON.name[0];
    showError(error_message);
  });
}



function deleteAll(event){
  event.preventDefault();

  let artist_id = $("#song_artist_id").val();

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artist_id + "/songs",
    contentType: "application/json",
    dataType: "json"
  })

  .done(function(data){
    $('#song_list').html(null);

  });
}

function deleteSong(event){
  event.preventDefault();

  let artist_id = $("#song_artist_id").val();
  let song_id = $(this).val();

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artist_id + "/songs/" + song_id + ".json",
    contentType: "application/json",
    dataType: "json"
  })

  .done(function(data){
    $(`#${song_id}`).remove();

  });
}


$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $(".delete").bind('click', deleteSong);
  $("#delete-all").bind('click', deleteAll);
});
