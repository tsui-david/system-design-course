@lesson_id
chat_system3
@lesson_title
Design Chat System High Level Architecture
@video_url
youtube.com

@question
What are the high level components that we have to consider for the architecture? 

@hint
Break down a chat service and group the services together. 

@answer
There are three major components that we can break down the chat system:
1. Stateless service
2. Stateful service
3. Third-party integration

@question
What is the stateless service?

@hint
Think of the traditional public-facing request/response services.

@answer
The stateless service are typical request/response services such as login, signup, profiles, authentication that are common across many different applications. These services are usually supported by a load balancer that routes requests to their destination. Many of these services are not required to be built as there are many third party offerings on the market that can be used for your system. 

@question
What is the stateful service?

@answer
The chat service is the stateful service. The client maintains a persistent connection with a chat server that does not switch as long as the server is available. 

@question
What is the third-party integration?

@hint
When you're using a chat service, even if the chat service isn't running, what information are you receiving about the chat?

@answer
Push notifications are the most important third party integration for any chat service. Even when the chat service is not in use, push notifications alert the user when there are new messages.