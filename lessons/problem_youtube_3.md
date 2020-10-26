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
How do we handle uploading/streaming videos?

@answer
It would be hard to do `POST`/`GET` calls to an api endpoint for videos. Instead, videos will likely have some sort of video streaming protocols.

The reason why `POST`/`GET` might not work as effectively is because 