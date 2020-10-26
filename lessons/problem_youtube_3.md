@lesson_id:youtube3
@lesson_title:Design YouTube High Level Architecture

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
How do we handle viewing videos?

@answer
We can view a video with a GET `https://youtube.com/<user_id>/videos/<video_id>`
It can accept parameters in its url for time offset, video quality

@question
How should the GET request response look like?

@answer
The response should include a json body of its metadata such as its current like, dislike, details, author, tags, category, comments

There could be a separated out request for the binary video itself as that could be in chunks. These would essentially be done through another type of video protocol.