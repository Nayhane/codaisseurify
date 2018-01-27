function submitSong(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  createSong($("#song_name").val(), $("#song_artist_id").val());
  $("#song_name").val(null);
}


function nextSongId() {
  return $(".song").length + 1;
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


    let listItem = $('<li></li>')
    .attr('id', songId)
    .html(name);

    let button = document.createElement("button");
     button.innerHTML = "Delete";


    let tableRow = $('<tr class="form-control"></td>')
    .attr('data-id', songId)
    .append($('<td>').append(listItem))
    .append(button);

    $("#song_list").append(tableRow);


  })

  .fail(function(error) {
  console.log(error)
  error_message = error.responseJSON.name[0];
  showError(error_message);
});

}




$(document).ready(function() {
    $("form").bind('submit', submitSong);

});
