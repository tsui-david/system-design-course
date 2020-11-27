@lesson_id
api2
@lesson_title
HTTP & REST
@topic
api
@video_url
https://youtu.be/cK2k_4rD-mQ

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
Representational State Transfer (REST) focuses on stateless data communication. What this means is that different users should be able to get the same result without any session data associated in the request. REST handles this by having the requests built into the url. HTTP has 4 different methods for communication: PUT, POST, GET, DELETE. Rest builds on top of these methods for interacting with the host by using the URL for each of the 4 methods. A GET request for all the users from Facebook.com might simply be GET http://www.facebook.com/users Other examples of real rest api can be visited here: Twitter, Instagram, Spotify.

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
Status codes are divided into 5 ranges of numbers: `1xx` -> `Informational`, `2xx` -> `Success`, `3xx` -> `Redirection`, `4xx` -> `Client Error`, `5xx` -> `Server Error`.

From Mozilla, specific example codes (These codes are the more frequent/relevant codes that should be remembered):

`100 Continue`: informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.

`200 OK`: Request has succeeded.

For GET it means the resource has been successfully fetched

For PUT/POST it means the server properly accepted the input, could also be 201

`301 Moved Permanently`: The url of the request has been moved and the response includes the new URL

`400: Bad Request`: Some sort of syntax issues from the client request

`401: Unauthorized`: The request was not authenticated

`403: Forbidden`: The request was authenticated but not authorized.

`404: Not Found`: Server cannot find the requested resource, often meaning the client requested incorrect endpoint

`405: Method Not Allowed`: The request method is known by the server but not allowed, such as deleting users or specific resources.

`500: Internal Server Error`: General server side error indicating the server doesn’t know what to do

`501: Not Implemented`: The requested HTTP method is not implemented. Example: The server is READ only so no post or put methods.

`502: Bad Gateway`: The server acting as a gateway was not able to get a response needed to handle the request. This is usually a network issue with the gateway load balancer that accepted the request and the actual server.
For more information on gateways, look up load balancer


@question
Follow Up: What’s the difference between authentication vs authorization?

@answer
Authentication = we know who you say you are
Authorization = you have permission to do what you wish to do
