@lesson_id
chat_system2
@lesson_title
How a Chat Service Work?
@topic
chat
@video_url
youtube.com

@question
What are basic functions that a chat service must support?

@hint
Think of fundamental operations that a chat service must have. 
    
@answer
1. Receive messages from other users. 
2. Locate the recipient of the message and forward the message to the recipient.
3. If a recipient is not active, hold the message until they are available. 

In order to estimate the capacity of the video storage, we can work backward.

@question
What happens when a sender sends a message to a recipient?

@hint
Chat services are handled through client/server applications.

@answer
The client opens a HTTP connection with the chat service and sends the message, the service will then send that message to the receiver. The keep-aliver header allows the client to keep a persistent connection with the chat service. Because HTTP is client-initated, sending messages from the server is harder. 

@question
What are some techiques to simulate a server-initiated connection?

@answer
1. Polling
2. Long polling
3. WebSocket

@question
What is polling? 

@answer
A technique where the client periodically asks the server if there are messages available. Polling can be resource intensive as it would cost servers resources to answer "NO" a majority of the time. 

@question
What is long polling?

@answer
Long polling establishes an open connection with the server until new messages are available or until a timeout. When new messages are received, the client will immediately send another requestion, continuing this cycle. HTTP servers are usually stateless. Sender and receivers might not be able to connect to the same server. Like polling, it is inefficient if users are not very active. 

@question
What is WebSocket?

@answer
WebSocket is the most popular method for sending asynchronous updates from server to client. A WebSocket connection begins as an HTTP connection initated by the client and is bi-directional and persistent. The connection, through a series of well-defined handshakes, can transform into a WebSocket connection. 