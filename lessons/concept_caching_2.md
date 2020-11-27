@lesson_id
caching_2
@lesson_title
Advantages of Caching
@topic
caching
@video_url
???

@question
What is stored in a cache?

@hint
Caches are most optimal when they remain consistent and don't have to reach back to the persistence layer. What type of data remains consistent over time?

@answer
*Caching should be used when the requested data is read frequently and updated infrequently*. Therefore, certain types of content lend themselves more readily to benefit from caching. Some of this content is:
- Logos and brand images
- Non-rotating images in general (navigation icons, etc)
- Style sheets
- General Javascript files
- Downloadable Content
- Media Files

This type of ***static*** content is excellent for caching because it changes very infrequently.


@question
Explain the benefits of caching.

@answer
Some of the primary benefits of caching are:
- Decreased network costs: caches along the network path between the request node and content node mean that if the cache holds the data, additional network activity to reach the content node will be unnecessary. 
- Improved responsiveness: caching reduces or eliminates network round trips which allows content to be retrieved faster, with some requests feeling instantaneous depending on it's "distance" to the user (e.g. browser cache is almost instant).
- Increased server performance: the server where content originates can benefit greatly because certain types of content loads and requests can be offloaded to caching servers, freeing up the origin server to do other work.
- Availability of content during network interruptions: although dependent on caching policies, caching can be used to serve content to end users even when it may be unavailable for short periods of time from the origin servers.