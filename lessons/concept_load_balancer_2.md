@lesson_id:load_balancer_2
@lesson_title:Implementing a Load Balancer
@video_url:???

@question Explain the primary ways load balancing can be implemented.

@hint Consider the implementation difference between a physical computer and a virtual machine

@answer There are two primary types of load balancer implementations: hardware based and software based.

Hardware based implementations:
- These are physical devices built to achieve optimum performance. They are the generally the optimal solution due to their speed and flexibility handling different load balancing types and scales.
- They are very expensive to build and configure, however, which limits their usage and scalability.
- Consequently they are not very common and are mostly used at the first point of entry into the infrastructure.

Software based implementations:
- Run on generic hardware (can be installed on any Linux or Window machines).
- Easy to configure and scale because its entirely software dependent (consider the ease in duplicating a VM, same idea applies here).
- Can use off the shelf load balancers or write a custom one.


@question Where can a load balancer implementation be placed in a network infrastructure?

@hint Consider the OSI model of computer networking as a starting point. 
@hint Imagine the levels of the server infrastructure stack that handles requests, what are these regions and where does a load balancer fit in?

@answer Load balancers can practically be placed throughout the entire server infrastructure stack. If the basic infrastructure stack is composed of the clients, the webservers, the application servers, and the database servers, flowing in that order, we can place load balancers between each part of the stack.
- Write out the specific layers and how we benefit from placing them here
- Add the charts found online as media (is this copy right infringement? If so make my own)


This allows us to consider a third type of load balancer implementation. It is the software load balancer but placed at the client level