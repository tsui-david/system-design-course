@lesson_id
load_balancer_3
@lesson_title
Implementing a Load Balancer
@topic
lb
@video_url
https://youtu.be/LH9kspySCrU

@question
Explain the primary ways load balancing can be implemented.

@hint
Consider the implementation difference between a physical computer and a virtual machine.

@answer
There are two primary types of load balancer implementations: hardware based and software based.

Hardware based implementations:
- These are physical devices built to achieve optimum performance. They are the generally the optimal solution due to their speed and flexibility handling different load balancing types and scales.
- They are very expensive to build and configure, however, which limits their usage and scalability.
- Consequently they are not very common and are mostly used at the first point of entry into the infrastructure.

Software based implementations:
- Run on generic hardware (can be installed on any Linux or Window machines).
- Easy to configure and scale because its entirely software dependent (consider the ease in duplicating a VM as opposed to physical machine).
- Existing commercial off the shelf load balancers may be used or a custom one can be written to fit more specific needs.

So far, we've discussed implementations that have been located solely in the infrastructure stack. Given the flexibility of the software based load balancer however, it can be placed at the client level. This can be called "smart clients" because the client must keep track of the pool of hosts, detect host status, and select the proper one. This is arguably the cheapest form of load balancing.