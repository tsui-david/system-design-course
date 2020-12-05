@lesson_id
chat_system4
@lesson_title
Design Chat System Architecture Continued
@topic
chat
@video_url
https://youtu.be/VCcHZFp2g4Y

@question
What triggers an online status change for a user?

@hint
Think of a situation where your would appear online/offline.

@answer
Users' statuses change when they:
1. login
2. logout
3. disconnect

@question
What mechanism is used to detect if a user is disconnected?

@hint
Its a method that sends a signal periodically. (thump thump)

@answer
We can use a heartbeat mechanic, in which the client periodically sends the server a signal that it is still connected. After a specific amount of time if the server doesn't receive that signal the user's status will change.

@question
How does a chat server send messages to multiple people in a chat?

@answer
It copies the messages it receives to the message queues of each user.

@question
If a user has multiple devices how does the service sync the messages to the user's devices?

@answer
The devices are connected through a websocket connection to the same chat server.

@question
What variable notifies the chat server if a device needs to be updated with a new message?

@hint
Something needs to keep track of most recent messages.

@answer
A variable such as *cur_max_message_id*, which you can use to compare the message that's stored in the database with the ones on the devices. 

@question
What are ways we can scale our system?

@hint
What can cause the service to fail?

@answer
Throw more money at it. Find areas of single points of failure and horizontally scale them. Such as:
1. load balancer
2. api servers
3. databases
4. service discovery
5. chat servers