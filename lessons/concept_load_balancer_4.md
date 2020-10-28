@lesson_id:load_balancer_4
@lesson_title:What Load Balancing Gets Us (Benefits of Load Balancing)
@video_url:???

@question Explain how a load balancer manages traffic and the benefits derived. How does it solve the problems discussed in the first video (single point of failure and overloaded servers)?

@answer (The answer here is the solution to the problems raised in the first video) A load balancer distributes incoming traffic among the servers behind the balancer. Given that the servers are all performing the same tasks, the connections should be distributed evenly among the servers in such a way to achieve peak efficiency.


@question What are other non-load based benefits of load balancing?

@hint Think of other areas of computing such as security.

@answer Besides performing it's basic function, a load balancer provides three additional benefits: security, scalability, and abstraction.

1. Security: users connect to the web servers by using the load balancers IP address, not the servers IP. This improves security by making all the servers behind the load balancer private and restricting access.
2. Scalability: the load balancer allows for easy implementation of horizontal scaling to deal with increased usage. Horizontal scaling involves adding more machines to deal with greater load. Without the load balancer, efficiently scaling would be an arduous task.
3. Abstraction (separation of concerns): the load balancer removes the burden of managing extra tasks and can concern itself with its main function. For example, the load balancer might perform SSL termination (decryption of SSL traffic), keeping the web server from having to perform this task itself and improving its performance.