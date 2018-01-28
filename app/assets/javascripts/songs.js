function submitSong(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  createSong($("#song_name").val(), $("#song_artist_id").val());
  $("#song_name").val(null);
}

function createSong(name, artist_id){

  let artistId = $("#song_artist_id").val();
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
    $("#song_id").val(null);

    let songId = data.id;


    let button = $('<button type="button"></button>')
    .attr('value', songId)
    .attr('id', songId)
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



function deleteAll(){
  event.preventDefault();

  let artist_id = $("#song_artist_id").val();
  let song_id = $(this).val();
  let songId = $(this).val();

  $.when($('.delete_all').remove())
  .then(deleteSong(songId));

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artist_id + "/songs/" + song_id + ".json",
    contentType: "application/json",
    dataType: "json"
  })

  .done(function(data){
    $('li[data-id="'+songId+'"]').remove();

  });
}

function deleteSong(){
  event.preventDefault();

  alert('passei');
  let artist_id = $("#song_artist_id").val();
  let song_id = $(this).val();
  let songId = $(this).val();

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artist_id + "/songs/" + song_id + ".json",
    contentType: "application/json",
    dataType: "json"
  })

  .done(function(data){
    $('li[data-id="'+songId+'"]').remove();

  });
}


$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $(".delete").bind('onclick', deleteSong);
  // $("#button").bind('onclick', destroySong);
});
