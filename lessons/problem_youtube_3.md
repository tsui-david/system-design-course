@lesson_id
youtube3
@lesson_title
Design YouTube High Level API
@topic
youtube
@video_url
https://youtu.be/rykxT92rKEg

@question
What API endpoints should the server have?

@hint
Think back to the core features of YouTube. What are some of the features YouTube should have?

@answer
We should have at the minimum:
1. Uploading/Streaming videos
2. Endpoints for video metadata such as likes/dislikes, comments

@question
How do we handle uploading videos?

@answer
Uploading and streaming videos could be done through REST APIs.
For general information on rest checkout @link:[](api1).

Let's look at how we might upload a video.

The endpoint could be a POST `https://youtube.com/<user_id>/videos`.
We can have an initial POST to create initial metadata placeholder such as the date, user, title, details, likes/dislikes, tags, category_id etc.

The header for the POST could contain the api key.

Then, have a PATCH to the api endpoint with the actual video base64 encoded.

@question
How do we upload the video file itself?

@hint
One strategy is to directly upload the entire file to some sort of storage like Amazon S3. However some videos can be long and as a result the uploaded file can be pretty large. How should this be handled?

@answer
The client uploader can upload videos in chunks to help with threading as well as bandwidth and video indexing. This is known as _multi part_ upload. S3 actually [has such feature built in](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingRESTAPImpUpload.html). It works by having the client initiate a request and the api responds with an upload id. The client then begins to chunk the content and send the chunk data, the hash of the data so that the server can validate the integrity of the chunk, and the chunk sequence number. 

@question
How do we handle viewing videos?

@answer
We can view a video with a GET `https://youtube.com/<user_id>/videos/<video_id>`
It can accept parameters in its url for time offset, video quality

@question
How should the GET request response look like?

@answer
The response should include a json body of its metadata such as its current like, dislike, details, author, tags, category, comments

There could be a separated out request for the binary video itself as that could be in chunks. These would essentially be done through another type of video protocol.

@question
How does the actual video content get streamed?

@hint
Thank back to how the video was uploaded. Similarly, we face the same problem of large file download.

@answer
The files will be chunked on the s3 storage. When we initiate the GET request for the video, we can download the chunk one by one. 

@question
Finally, how should we handle the comment/like/dislike?

@answer
We can reuse our endpoint: `https://youtube.com/<user_id>/videos/<video_id>` and do a POST with like disklike metadata to the endpoint. 
 