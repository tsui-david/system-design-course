@lesson_id
youtube4
@lesson_title
Design YouTube High Level Architecture
@video_url
https://youtu.be/TXD7LgVrDi0

@question
What architectural components should we consider?

@hint
Again, think back to what features we wish to solve in YouTube. The system should be able to handle upload, smooth viewing, and have the users able to like, dislike.

@hint
How should we store the YouTube videos?

@hint
How should we store the metadata associated with YouTube videos?

@hint
How should we store the thumbnails of each video?

@hint
When we watch YouTube at lower bandwidth, the video automatically adjusts to a lower quality video. How is this achieved?

@answer
The general architecture of YouTube would need:

1. Some sort of distributed file storage for videos. As mentioned previously, s3 is a good candidate. 
2. Thumbnail images can be stored in s3 as well. But thumbnails are inherently small files where the number of thumbnails outnumber the number of videos. As a result, storing thumbnails in a key/value db like DynamoDB might be a good choice.
3. A database is needed to store the video metadata/users/video mapping/image mapping. 
4. A web server to handle the requests sent to fetch videos/metadata. 
5. A proxy/load balancer to handle REST traffic from clients.
6. In order to handle different qualities in videos, the webserver should _encode_ the videos into different format (720p, 1080p, HD, etc), thus a seperate encoding service

@question
Why shouldn't we store thumbnail images in database?

@answer
Beacause the image file is too big. Instead, we can store the image url in the database (or key) so that a further query for the image to Dynamo or S3 can be done.

@question
How would the encoder work?

@hint
There would be many chunks of videos coming in and many different formats as output. How should we store the data so that this can be managed easily?

@answer
A message queue @link[](mq1) can handle the interactions between the video chunks and the different video formats. Producer will be the chunks of videos and the consumer will be the encoder to encode to specific formats.

Another benefit of message queue is that should the connection drop, the chunks are still held in the queue and can be easily resumed during upload.

@question
How can we improve the latency being transmitted by video streaming?

@answer
Since video files are quite large, we can make use of CDNs and edge nodes so that the user can stream videos faster and more cache is available. Check out @link[](cdn1) for more information.
