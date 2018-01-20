Artist.destroy_all

# Artist
adele = Artist.create!(name: "Adele")
ed_sheeran = Artist.create!(name: "Ed Sheeran")
coldplay = Artist.create!(name: "Coldplay")
u_2 = Artist.create!(name: "U2")

# Songs:
# Adele
Song.create!(artist: adele, name:"Hello")
Song.create!(artist: adele, name:"Someone Like You")
Song.create!(artist: adele, name:"Skyfall")
Song.create!(artist: adele, name:"Make You Feel My Love")
# Ed Sheeran
Song.create!(artist: ed_sheeran, name:"Shape of You")
Song.create!(artist: ed_sheeran, name:"Thinking Out Loud")
Song.create!(artist: ed_sheeran, name:"Galway Girld")
Song.create!(artist: ed_sheeran, name:"Tenerife Sea")
# coldplay
Song.create!(artist: coldplay, name:"The Scientist")
Song.create!(artist: coldplay, name:"Paradise")
Song.create!(artist: coldplay, name:"Viva la Vida")
Song.create!(artist: coldplay, name:"Fix You")
# U2
Song.create!(artist: u_2, name:"Beautiful Day")
Song.create!(artist: u_2, name:"All I want is You")
Song.create!(artist: u_2, name:"Song for Someone")
Song.create!(artist: u_2, name:"The Miracle")
