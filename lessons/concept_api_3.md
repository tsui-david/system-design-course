@lesson_id
api3
@lesson_title
REST Endpoints
@topic
api
@video_url
https://youtu.be/iWSJm5h9-TM

@question
What operations can exist regarding CRUD on Spotify playlist?

@hint
What operations can exist regarding CRUD on Spotify playlist?

`Create`: Create new playlist

`Read`: Read songs from playlist, read all playlist

`Update`: Change playlist name, add playlist song

`Delete`: Remove playlist, remove song from playlist

@hint
What HTTP methods can be used regarding CRUD on Spotify playlist? 

`Create`: POST new playlist

`Read`: GET playlist, GET songs

`Update`: PATCH playlist song, PUT playlist song

`Delete`: DELETE playlist, DELETE song

@hint
REST API interacts through urls. This means the api will start with spotify’s domain: www.spotify.com/api. In addition, apis utilize versions. As a result, what is an example of a starting url for REST api?
www.spotify.com/api/v1/<nouns>

@hint
REST APIs involve nouns to dictate what object to interact with. As a result multiple HTTP methods can be associated with the same REST API endpoint. What are some of these url endpoints?

www.spotify.com/api/v1/{user_id}/playlists -> 
`GET`: get all playlist (name, number of songs, user, follower, etc)
`POST`: create playlist

www.spotify.com/api/v1/{user_id}/playlists/{playlist_id} ->
PATCH: change playlist name by id
DELETE: delete playlist by id
GET: get playlist property by id
PUT: update the playlist and replace it
www.spotify.com/api/v1/{user_id}/{playlist_id}/tracks ->
GET: get playlist songs
POST or PUT: create / replace song to playlist
DELETE: delete song
PATCH: change playlist song order

@hint
In Post/Put/Patch the request sent will contain a body. These are additional parameters that are associated with the request. What are some examples of items you would need to add for POST, DELETE, PUT, PATCH?

POST-> post new playlist. Rest API body is in JSON:
www.spotify.com/api/v1/{user_id}/playlists
{
 name: “MyEveningPlaylist,
 songs: [{name: “Never Say Never”, artist: [“Justin Bieber”, “Jaden Smith”],  album: “Never Say Never - The Remixes”}]
}

PATCH ->  update playlist name
www.spotify.com/api/v1/{user_id}/{playlist_id}
{
  name: “MyMorningPlaylist”
}

PUT -> replace whole playlist
www.spotify.com/api/v1/{user_id}/playlists
{
 name: “MyMorningPlaylist”,
 songs: [{name: “Never Say Never”, artist: [“Justin Bieber”, “Jaden Smith”],  album: “Never Say Never - The Remixes”}]
}

@hint
What are the responses the server should give? Give some examples for spotify playlist api

POST-> post new playlist. Rest API body is in JSON:
www.spotify.com/api/v1/{user_id}/playlists

200 OK
{
 playlist_id: 123playlist1,
 date_created: 1602945257,
 date_updated: 1602945257,
 name: “MyEveningPlaylist,
 songs: [{name: “Never Say Never”, artist: [“Justin Bieber”, “Jaden Smith”],  album: “Never Say Never - The Remixes”}]
}