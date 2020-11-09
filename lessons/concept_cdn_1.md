@lesson_id
cdn1
@lesson_title
Content Delivery Network Introduction
@video_url
???

@question
What is a CDN?

@answer
A CDN, or Content Delivery Network, is a overlay network of geographically distributed web caches (called points of presence or PoPs) that are designed to deliver static media content to a client from an optimal location. CDNs are designed to reduce latency (the delay between a request and receiving the data) caused by physical distance between the requesting node and the hosting server. Because of distributed and powerful networks, CDNs today serve a majority of web traffic and allow for extremely fast transfer of static media.


@question
How does content get added to the CDN?

@answer
When the user makes a request for some content the CDN is first checked. If the CDN does not have the content, it requests the content and then caches the content based on the time to live HTTP header (behaves just like a cache).