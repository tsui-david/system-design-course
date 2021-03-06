@lesson_id
mq1
@lesson_title
Message Queue Introduction
@topic
mq
@video_url
https://youtu.be/Hp3xLhogpGU

@question
What is a message queue?

@answer
Queue buffer for asynchronous communication between different microservice / stateless services.
Composes of 3 pieces: The producer which produces data that needs to be processed, the queue which stores these data, and the consumer which processes these data from the queue

@question
How does a message queue "decouple" system components?

@hint
What is "decoupling"? What benefits does it bring?

Decoupling = 
Seperating a software system’s dependencies so that the components of the system are not tied closely together. 
This is a design pattern that brings several benefits:
Separating dependencies is higher resilience. Because the components are not as dependent on one another, one component failing would not result in another component downstream failing as well.
Produces better encapsulation/abstraction through more focused responsibility. This allows for easier modification/expansion of the system as there are not as much moving pieces in the system to worry about

@answer
A message queue separates the dependencies between the producers and the consumers. 
Producers are components which generates data and consumers are components that process the data. There can be a many to many relationship between producer and consumer and without a message queue, the dependencies between the many to many relationship can be hard to manage.
With the introduction of message queue, the relationships are solidly separated where the consumer dependency on the producer no longer is affected by the health of the producer. Instead, that dependency is on the message queue. Similarly, the producer no longer needs to manage the state of which consumers are consuming from it, and can dump its data onto message queue
The message queue now abstracts the responsibility for managing the states of where each consumer is processing from the producer and the the responsibility of managing where each producer is producing to.https://aws.amazon.com/message-queue/

@question
What are some use cases for message queue? What are alternatives?

@answer
Asynchronous processing between multiple components
    Whenever there is any need to “wait” endlessly for a response, a message queue can be used
    It is better to respond to the user that there is something not processed rather than continuously wait for that same response, latency is eliminated even though data might not have been processed

Need for data persistence on tracking incoming messages / outbound consumer messages
As system components scale out, more and more producer and consumers will also be scaled out. At this point, a message queue is needed to handle the dependency interconnections between the two components
    It is O(1) for producer/consumer to access the data rather than wait

In summary you should use a queue if:
    Your request is indeterministic
    Long running request by nature (complex calculation)
    Resource hungry
        Bad idea to have the web server serving the request do it for you. Instead queue it and have a scalable stateless server handle it.

@question
What are some implementations of message queues?

@answer
RabbitMQ
Kafka

@question
What is the difference between pub/sub vs message queue?

@hint
What is pub/sub system?

Pub/sub or publisher subscriber system is another form of asynchronous communication often used in stateless architecture where a publisher service will publish its data and its subscriber systems will immediately receive the incoming data. In contrast, a message queue involves a separate service completely which manages the states between the publisher and subscriber and the message that is sent does not have to be immediately consumed in a message queue.

@answer
A pub/sub will not be able to handle the same use cases as message queue
