@lesson_id:api1
@lesson_title:API Introduction

@question 
What happens when a user searches “www.facebook.com”? Explain how the request gets resolved and how the user arrives at facebook web app.

@hint 
IP addresses are unique address identifiers for every machine. In order to communicate with one another, ip addresses are registered on a web of different pockets of network which communicates with one another.

@hint
DNS (domain name service) is a registrar of different ip addresses that translates an ip address to a domain name such as www.google.com. How might knowing the domain name help with the request/response in a client to host communication?

@answer
DNS acts like a phone book for ip addresses of different machines. It translates the ip address to a human readable domain name. A client making a request, to do anything, must need either the domain name of the host or the ip address. Once the user searches the domain name www.facebook.com, the domain name is queried by the DNS and a specific ip address is returned. From there the request gets sent to the ip address and Facebook responds with html/css/javascript for the user’s browser to render the app.

@question 
How do domain names gets resolved by the DNS, ie how does a DNS query work?

@answer
First, the user’s computer searches its own web cache for existing mapping of domain to ip. If this does not exist, the query goes to the user’s ISP (internet service provider) or the dns resolver. If the resolver solver still cannot find the mapping, it passes the request further along up the dns hierarchy, known as the dns root server. The dns root server will tell the ISP the ip address of the top level domain name server (TLD) to query against. The TLD is in charge of mapping all the ip addresses of the authoritative nameserver for the given top level domain name (.org, .com, .io, etc). Once the ISP has the authoritative nameserver’s ip, the ISP queries the authoritative nameserver for the domain name’s ip address. Now the ISP cache’s the domain name so the next time another user queries it, the ISP will hold the mapping.

@question 
Once the ip address is returned from the DNS, what happens afterwards? How does knowing the ip address help the user reach Facebook’s website?

@answer
First, the user’s computer searches its own web cache for existing mapping of domain to ip. If this does not exist, the query goes to the user’s ISP (internet service provider) or the dns resolver. If the resolver solver still cannot find the mapping, it passes the request further along up the dns hierarchy, known as the dns root server. The dns root server will tell the ISP the ip address of the top level domain name server (TLD) to query against. The TLD is in charge of mapping all the ip addresses of the authoritative nameserver for the given top level domain name (.org, .com, .io, etc). Once the ISP has the authoritative nameserver’s ip, the ISP queries the authoritative nameserver for the domain name’s ip address. Now the ISP cache’s the domain name so the next time another user queries it, the ISP will hold the mapping.

@question 
In a typical web application, how does a server and client continue to communicate/transfer data? Explain what HTTP and API is.

@hint
Hint 1:  Assume that the client already resolved the ip address through DNS. In the previous lesson, we know that once the client has the ip address, the client can directly talk with the server. What communication protocol is used in talking with the web server?

@answer
HTTP stands for hyper text transfer protocol. It sits on top of TCP and transfers html pages, javascript, and css components to the client. Once these components are realized on the client, the web components allow the client to continue to interact with the host server through apis. API (application protocol interface) is not something specifically restricted to the web domain but to any server to server communication. It is a set of interface concepts that is agreed upon to further transmit structured data with business meaning between client and host.

@question 
What is the difference between HTTP vs APIs?

@answer
HTTP is a protocol built to handle communication sessions over the network while APIs use HTTP to transfer data in an interfaced organized way with business logic in mind. We will talk more about HTTP requests in the next module.

@question 
What are some examples of different API protocols, whether they are web/server to server?

@answer
REpresentational State Transfer (REST) focuses on stateless data communication. What this means is that different users should be able to get the same result without any session data associated in the request. REST handles this by having the requests built into the url. HTTP has 4 different methods for communication: PUT, POST, GET, DELETE. Rest builds on top of these methods for interacting with the host by using the URL for each of the 4 methods. A GET request for all the users from Facebook.com might simply be GET http://www.facebook.com/users Other examples of real rest api can be visited here: Twitter, Instagram, Spotify.

REST should be used if you wish to communicate with JSON. It is popular because of how easy it is to integrate different services as the api is done through the url itself. Don’t worry if these don’t seem clear, we will explore on Rest API and get a chance to practice on designing apis next!

@question 
What are some methods of HTTP requests and what are the use cases for each? 

@hint
Some HTTP methods are based off of verbs used for creating, reading  updating, deleting (CRUD) against a service

@answer
The 5 relevant methods to REST API are: POST, GET, PUT, PATCH, DELETE. POST creates entries, GET reads, PUT updates, PATCH updates, DELETE deletes. These methods are closely related to how RestApi is designed as the  RestAPI utilizes the HTTP constructs and URL to construct stateless communication between client and server.

@question 
When do you use POST vs PUT vs PATCH?

@answer
POST is used for creating new entries against the server. An example of a POST use case is to register a new user to a service, such as signing up for Reddit.
PUT is used to replace an existing entry with a new entry. An example of a PUT use case is to replace a news article with a new article.
PATCH is used to update a property of an existing entry. An example of  PATCH use case is to change the author field of a news article.

@question
In addition to the requested data, the server also returns HTTP status codes. What are some examples of these status codes? What are the purposes of these status codes?

@hint
What are some use cases of these status codes? Status codes can indicate success, failure, and others.

@hint
For each 5 HTTP methods, the same status codes can apply.

@answer
Status codes are divided into 5 ranges of numbers: 1xx -> Informational, 2xx -> Success, 3xx -> Redirection, 4xx -> Client Error, 5xx -> Server Error.

From Mozilla, specific example codes (These codes are the more frequent/relevant codes that should be remembered):
100 Continue: informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
200 OK: Request has succeeded.
For GET it means the resource has been successfully fetched
For PUT/POST it means the server properly accepted the input, could also be 201
301 Moved Permanently: The url of the request has been moved and the response includes the new URL
400: Bad Request: Some sort of syntax issues from the client request
401: Unauthorized: The request was not authenticated
403: Forbidden: The request was authenticated but not authorized.
Follow Up: What’s the difference between authentication vs authorization?
Authentication = we know who you say you are
Authorization = you have permission to do what you wish to do
404: Not Found: Server cannot find the requested resource, often meaning the client requested incorrect endpoint
405: Method Not Allowed: The request method is known by the server but not allowed, such as deleting users or specific resources.
500: Internal Server Error: General server side error indicating the server doesn’t know what to do
501: Not Implemented: The requested HTTP method is not implemented. Example: The server is READ only so no post or put methods.
502: Bad Gateway: The server acting as a gateway was not able to get a response needed to handle the request. This is usually a network issue with the gateway load balancer that accepted the request and the actual server.
For more information on gateways, look up load balancer

@question
What operations can exist regarding CRUD on Spotify playlist?

@hint
What operations can exist regarding CRUD on Spotify playlist?
Create: Create new playlist
Read: Read songs from playlist, read all playlist
Update: Change playlist name, add playlist song
Delete: Remove playlist, remove song from playlist

@hint
What HTTP methods can be used regarding CRUD on Spotify playlist? 
Create: POST new playlist
Read: GET playlist, GET songs
Update: PATCH playlist song, PUT playlist song
Delete: DELETE playlist, DELETE song

@hint
REST API interacts through urls. This means the api will start with spotify’s domain: www.spotify.com/api. In addition, apis utilize versions. As a result, what is an example of a starting url for REST api?
www.spotify.com/api/v1/<nouns>

@hint
REST APIs involve nouns to dictate what object to interact with. As a result multiple HTTP methods can be associated with the same REST API endpoint. What are some of these url endpoints?

www.spotify.com/api/v1/{user_id}/playlists -> 
GET: get all playlist (name, number of songs, user, follower, etc)
POST: create playlist

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