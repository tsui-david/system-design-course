@lesson_id:caching_3
@lesson_title:Cache Invalidation and It's Friends
@video_url:???


@question What are some considerations to take into account when caching?

@answer The major considerations to take into account are: 
- Invalidation: the cache can become outdated and must rely on the source of truth (data store, recomputed values, etc). This is particularly an issue on a larger scale (see CDNs).
- Eviction: caches can only hold a portion of the data, therefore once the cache is full, data that is no longer useful must be discarded.
- Expiration: data in that cache that has not been accessed for an extended period of time violates the Locality of Reference Principle and most likely means that it should be removed from the cache.

@question What schemes can be used

@question List and explain cache invalidation schemes.

@answer


@question List and explain cache eviction policies.

@answer