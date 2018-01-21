Artist.destroy_all

# Artist
adele = Artist.create!(name: "Adele", remote_image_url:"http://res.cloudinary.com/nayhane/image/upload/v1516526483/adele1_qukxdr.jpg")
ed_sheeran = Artist.create!(name: "Ed Sheeran", remote_image_url:"http://res.cloudinary.com/nayhane/image/upload/v1516526505/ed_sheeran1_f3ried.jpg")
coldplay = Artist.create!(name: "Coldplay", remote_image_url: "http://res.cloudinary.com/nayhane/image/upload/v1516526492/coldplay1_l0ytid.gif")
u_2 = Artist.create!(name: "U2", remote_image_url: "http://res.cloudinary.com/nayhane/image/upload/v1516526499/U21_ldccjs.jpg")

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
