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
  });
}


$(document).ready(function() {
    $("form").bind('submit', submitSong);

});
