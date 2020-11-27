@lesson_id
load_balancer_4
@lesson_title
What Load Balancing Gets Us
@topic
lb
@video_url
???

@question
Explain how a load balancer manages traffic. How does it solve the problems discussed in the first lesson (single point of failure and overloaded servers)?

@answer
Very generally, load balancing distributes incoming traffic among the servers behind the balancer. Given that the servers are all performing the same tasks, the connections should be distributed evenly among the servers in such a way to achieve peak efficiency.

Load balancing solves the single point of failure problem by routing requests to other servers when a server is down. Without load balancing, dealing with a downed server falls on the person making the request to find another available server. With a load balancer the user need not be aware that they are being routed to another server.

Load balancing also resolves overloaded servers by evenly distributing load over all the available servers. Without a load balancer, traffic can become concentrated on a single server, causing the server to process requests more slowly or even drop requests due to overloading. With a load balancer the load on each server is managed through distribution algorithms and health checks. This ensures each server is doing an equal amount of work therefore resulting in an optimal performance across all severs.


@question
What are other non-load based benefits of load balancing?

@hint
Think of other areas of computing.

@answer
Besides performing it's basic function, a load balancer provides three additional benefits: security, scalability, and abstraction.

1. Security: users connect to the web servers by using the load balancers IP address, not the servers IP. This improves security by making all the servers behind the load balancer private and restricting access.
2. Scalability: the load balancer allows for easy implementation of horizontal scaling to deal with increased usage. Horizontal scaling involves adding more machines to deal with greater load. Without the load balancer, efficiently scaling would be an arduous task.
3. Abstraction (separation of concerns): the load balancer removes the burden of managing extra tasks from the servers so that they can concern themselves with their main function. For example, the load balancer might perform SSL termination (decryption of SSL traffic), keeping the web server from having to perform this task itself and improving its performance.