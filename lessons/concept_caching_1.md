@lesson_id
caching_1
@lesson_title
Caching Introduction
@topic
caching
@video_url
???

@question
Define caching using the Locality of Reference Principle.

@answer
Caching takes advantage of the Locality of Reference Principle which states that recently requested data is likely to be requested again. Therefore, caching is the act of storing reusable data responses in order to make subsequent requests faster. When a request is made, caches are checked for the requested data along the way to the origin location of the data.

@question
List and explain different web caching types/layers.

@hint
Caches can be placed practically anywhere, think of a location it could be placed in the network stack and how it might help.

@answer
Although caching is widely used in all levels of computing, we will focus primarily on web content caching. Three of the main caching layers are:
- Application: cache is placed directly on the request layer node. Enables local storage of response data, if the data is not found request will be made ot the persistence layer. Suffers when multiple nodes are added because traffic might be distributed across different nodes (say with a [Load Balancer](http://systemdesigncourse.com/lessons/load_balancer_2)), increasing cache misses.
- Global: all nodes use a single cache space. There are two subtypes:
    - The nodes hit the global cache, on a miss the global cache is responsible for retrieving the missing data from the persistence layer.
    - The nodes retrieve data not found in cache. This type is less common.

    This type of cache solves the issue with application caching when there are multiple nodes; however the global cache itself can become a bottleneck if the cache is unable to handle the number of requests.
- Distributed: cached data is spread out on different nodes. On a request, a lookup up is made to determine which node has the data which is then retrieved. If no node has the data, a request is made to the persistence layer. This type of cache is easy to expand because the number of caching nodes can simply be increased. This, however, caries all the intricacies/complexity of a distributed system and difficult to maintain.