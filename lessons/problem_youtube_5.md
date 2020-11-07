@lesson_id:youtube5
@lesson_title:Design YouTube High Level Architecture Pt. 2
@video_url:https://youtu.be/H8vvNRnFs1o

@question
What would our database look like?

@hint
What are we storing in the database?

Remember that we are storing users, video metadata, and image keys

@answer
The database should compose a User table, a video table, and a separate table for image. The user table can hold the user id, the username, and any metadata such as age, height, profile image key, etc. 

The like/dislike is a many to many between user and video so it will be a separate table, similarly with the comments.

The video table can hold metadata on details such as video upload date, user uploader, length, tags and the video key to s3.

The thumbnail table can hold a key to the video id and a key to the thumbnail image.

@question
How do we shard the database?

@hint
We should shard based on something that can be equally distributed.

@answer
We can shard based on video id since each video will be unique so the videos will be equally distributed.

@question
Why can't we shard based on user id?

@answer
Because a user who is super popular might upload many videos.


@question
How can we improve the latency being transmitted by video streaming?

@answer
Since video files are quite large, we can make use of CDNs and edge nodes so that the user can stream videos faster and more cache is available. Check out @link[](cdn1) for more information.

