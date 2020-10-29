@lesson_id:load_balancer_5
@lesson_title:Load Balancing Algorithms
@video_url:???

@question How does a load balancer choose which server to route to?

@hint Think about the single point of failure and overloaded servers problems.

@answer Selecting a server depends on two things: the status of the server and the load balancing algorithm being used.

The load balancer must consider:
- The state of the servers (health checks)
- The type of requests being made 
- The duration of the tasks

and change route connections accordingly. For health checks, a load balancer will monitor connections to servers, if a server does not respond, it is removed from the pool of available servers. The type of request and duration of tasks are mostly factors taken into consideration by the load balancers routing algorithm.



@question Name some load balancing algorithms. Which one would be effective for persistent connections?

@hint Load balancing algorithms depend on on the type of request. Consider different types of requests and algorithms that might correspond.

@hint What makes persistent connections different from others? What do we know about their connection times?

@answer Load balancing algorithms can vary substantially, ranging from "dumb" algorithms that blindly route traffic to algorithms that may consider a variety of factors when deciding where to route traffic. Some factors that may be considered are the type of requests and duration of tasks being performed. Load balancing algorithms include:
- Hash Based: requests are distributed on hashed values (i.e. Request URL or Request IP).
- Source (IP hash): client request IP is hashed, therefore the client is routed the same server. Most effective when client needs to connect to the same server through repeated connections over time.
- Round Robin: cycles through a list of servers and sends each new request to the next server. It is most useful when the servers are of equal specification and there are not many persistent connections.
- Least Connections: directs traffic to the server with the fewest active connections.
- Least Response Time: a dummy request is sent to the servers and the load balancer keeps track of the time it takes to get a response. Requests are distributed to the server which has the least response time.
- Consistent hashing: perhaps the most important load balancing algorithm. Ensures that when a hash table is resized, not all keys need to be remapped.


Servers that are dealing with persistent connections often have to consider that persistent connections have no set end time and therefore there is no way of predicting when a connection will end. Therefore connections will generally result in unevenly distributed load on the servers. Using the Least Connections works to balance uneven servers.