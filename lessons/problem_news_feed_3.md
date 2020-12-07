@lesson_id
news_feed_3
@lesson_title
News Feed: Interface
@topic
news
@video_url
https://youtu.be/zbLv8BWdZbU

@question
What API endpoints will the server have?

@hint
Think back to the core features of we defined in the requirements. What are some of the features a news feed should have?

@answer
The primary endpoints will allow us to:
- Get the news feed
- Publish a post

@question
How could getting the news feed be handled?

@answer
Using a REST API GET request. The GET request could look like:

`GET/v1/<userId>/feed`

with a single parameter:
- auth_token: used to authenticate API request

@question
How could publishing a post be handled?

@answer
Using a REST API POST request. The POST request could look like:

`POST/v1/<userId>/feed`

with three parameters:
- content: actual value of the post
- type: this is the type of media (text, image, video)
- auth_token: used to authenticate API request

If the type is not text, we can encode the images or video in base64 in the request body.


@question
How could a post be edited?

@hint
Think about the API CRUD methods @link:[](api1).

@answer
Posts could simply be edited using a PATCH operation to modify the content aspect of a post (the ID nor the poster will change so PUT would result in redundancy here).

@question
What kind of storage option would we use for posts?

@hint
How can we categorize the types of relationships in our data? How can we best describe that data?

@answer
A database will be necessary to store content, however not all database options are optimal for a news feed. Because of the friend relationships, a graph database would be best suited.

@question
How will content data be stored?

@hint
Recall the parameter fields for the POST query

@hint
Remember to consider the different types of media a post can contain (text, images, video).

@answer
Although databases store text with no issues, storing images and video in a database creates a myriad of problems. Consequently, using a distributed object storage system like Amazon's S3 to store the images and video would keep performance optimized, with links to the S3 storage location kept in the database rather then the files themselves.

@question
How are friends notified when a new post has been made to their news feeds?

@answer
A notification that sends out push notifications to friends when new content is published.

@question
How will a newly published post be distributed?

@answer
A fanout service which pushes new content to friends news feeds can be used.

@question
What are the two fanout models?

@answer
The two models are:
- Fanout on write (push): when a post is published, the new news feed is precomputed and written to friend's caches. This ensures that getting a news feed is very quick because the news feed is already created, however it can be very expensive if the user has many friends because every friends news feed must be computed.
- Fanout on read (pull): when a user loads their news feed, new posts are pulled into the feed. This solves the issue of computing many news feeds if the user has many friends and also prevents unnecessary computation for users who rarely log on; however, loading the news feed will be slower for users because it must be computed when requested.


@question
Which fanout model should the news feed system use?

@hint
Consider the difference cases between users that have many followers and users that do not.

@answer
The optimal approach in this case is the hybrid approach. For most users, we can use the push approach because the negative aspects of the method do not affect users who have smaller numbers of friends. For users who have large amounts of users, such as celebrities, we can use a pull approach to prevent extreme computation overload.