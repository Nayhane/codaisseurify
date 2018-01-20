Artist.destroy_all

# Artist
adele = Artist.create!(name: "Adele")
ed_sheeran = Artist.create!(name: "Ed Sheeran")
coldplay = Artist.create!(name: "Coldplay")
u_2 = Artist.create!(name: "U2")

# Songs:
# Adele
Song.create!(name:"Hello", artist: adele)
Song.create!(name:"Someone Like You", artist: adele)
Song.create!(name:"Skyfall", artist: adele)
Song.create!(name:"Make You Feel My Love", artist: adele)
# Ed Sheeran
Song.create!(name:"Shape of You", artist: ed_sheeran)
Song.create!(name:"Thinking Out Loud", artist: ed_sheeran)
Song.create!(name:"Galway Girld", artist: ed_sheeran)
Song.create!(name:"Tenerife Sea", artist: ed_sheeran)
# coldplay
Song.create!(name:"The Scientist", artist: coldplay)
Song.create!(name:"Paradise", artist: coldplay)
Song.create!(name:"Viva la Vida", artist: coldplay)
Song.create!(name:"Fix You", artist: coldplay)
# U2
Song.create!(name:"Beautiful Day", artist: u_2)
Song.create!(name:"All I want is You", artist: u_2)
Song.create!(name:"Song for Someone", artist: u_2)
Song.create!(name:"The Miracle", artist: u_2)
