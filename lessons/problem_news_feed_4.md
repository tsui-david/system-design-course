@lesson_id:news_feed_4
@lesson_title:News Feed: Architecture/Details
@video_url:???


@question What architectural components should we consider?

@hint Think about what happens when we receive different requests.

@hint When we receive a publish request, what needs to take place?

@hint When we receive a fetch request, how do we serve the user the news feed?

@answer There are two major architectural components. The first is the publishing architecture which generally would consist of:
1. A **load balancer** to distribute traffic from users among the web servers
2. The **web servers** which route PUT/PATCH requests to either to the post service, notification service, or fanout service
3. The **post service** connects to and stores posts in the **graph database** and appropriate content (images, video) in the **S3 instance**.
4. The **notification service** sends out notifications to users when a new post is made
5. The **fanout service** which:
    1. Which pulls friends IDs and settings (muted users) from a **database**
    3. Puts post and friend information in a **message queue**
    2. Uses **fanout workers** to fetch from the message queue and store in the **news feed cache**

The second would be the fetching architecture for getting the news feed, which would generally consist of:
1. A **load balancer** to distribute traffic from users among the web servers
2. The **web servers** route GET requests to news feed service
3. The **news feed servce** which:
    1. Pulls the post ID from a **cache**
    2. Hydrates the post by pulling the necessary data from other **caches, databases, and distributed object storage systems (S3)**
    3. Returns the data to the client in JSON


@question How can we improve news feed performance?

@answer Although using caches inside the system helps with optimization, we can use a CDN to help take the load of serving up images and video to users.