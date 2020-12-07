@lesson_id
caching_3
@lesson_title
Cache Invalidation and It's Friends
@topic
caching
@video_url
https://youtu.be/ZwcnD64pm9Y

@question
What are some considerations to take into account when caching?

@hint
Caches are limited, what happens when they reach their limit?

@answer
The major considerations to take into account are: 
- Invalidation: the cache can become outdated and must rely on the source of truth (data store, recomputed values, etc). This is particularly an issue on a larger scale (see CDNs).
- Eviction: caches can only hold a portion of the data, therefore once the cache is full, data that is no longer useful must be discarded.
- Expiration: data in that cache that has not been accessed for an extended period of time violates the Locality of Reference Principle and most likely means that it should be removed from the cache.

@question
List and explain cache invalidation schemes.

@hint
Given a cache and database that you must write to, think of the different order you might share data between the two.

@answer
When data is modified in the database, it is invalidated in the cache. Some schemes for dealing with the invalidated cache are:
- Write through: data is written into the database through the cache, with the operation only succeeding if both writes are successful. Although this results in excellent data consistency between the cache and database, it is very taxing for systems that have many writes because every write operation must occur twice. Therefore this is optimal for systems that are read heavy.
- Write around: data is written directly to the database, bypassing the cache. This prevents the costly double write operations from the write through cache but means that a request for recently updated information will result in a cache miss and require an expensive look up in the database. Therefore this is optimal for systems that do not read frequently.
- Write back: data is written only to the cache and confirmed to the client. Writing the data back to the database occurs asynchronously at a later time or under certain conditions. This results in low latency and high throughput for write operations however there is a severe risk of data loss in case of cache failure. This can be minimized by replicating the cache across multiple nodes. Therefore this is optimal for write intensive applications.

@question
List and explain the most popular cache eviction policies.

@hint
Think of data structures and their methods of removing elements.

@answer
Because caches can only hold a part of the data, data that is no longer useful must be discarded. These six cache eviction policies provide some examples how:
- Least Recently Used (LRU)
- Least Frequently Used (LFU)
- Most Recently Used (MRU)
- First In First Out (FIFO)
- Last In First Out (LIFO)
- Random Replacement (RR)