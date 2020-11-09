@lesson_id
cdn_2
@lesson_title
CDN Benefits and Considerations
@video_url
???

@question
Name some benefits of using a CDN?

@hint
Remember a CDN is simply a special implementation of a cache.

@answer
Although this is highly dependent on the needs of a site (as we will later see) the main benefits of a CDN are:
- Improved website load times
- Reducing bandwidth costs
- Increasing content availability and redundancy
- Improving website security

You might notice virtually all of these are similar to the benefits offered by the generic definition of a cache.


@question
When deciding to use a CDN in a system, what considerations should be considered?

@answer
1. Cost: CDNs are typically run by a third party that will charge you for data transfers in and out of the CDN. of use with respect to nature of data requested
2. Content expiration time: if content takes too long to expire it will be outdated; if it expires to quickly then content will be repeated loaded from the origin servers
3. CDN outage: clients should be able to detect CDN outages and request data from the origin
4. File invalidation: files can be invalidated in a CDN in two ways
    1. CDN API calls provided by CDN vendor
    2. Object versioning (e.g. image.png?v=2)