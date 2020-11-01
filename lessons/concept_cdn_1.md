@lesson_id:cdn1
@lesson_title:Content Delivery Network Introduction
@video_url: ???

@question What is a CDN?

@answer A CDN, or Content Delivery Network, is special type of cache, essentially it is an overlay network of web caches designed to deliver content (typically static media) to a client from the optimal location (i.e. geographic location).

@question How does content get added to the CDN?

@answer The user makes a request for some content, if the CDN does not have the content, it requests the content and then caches the content based on the time to live HTTP header (behaves just like a cache).