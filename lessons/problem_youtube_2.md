@lesson_id
youtube2
@lesson_title
Design YouTube Capacity Estimation
@video_url
https://www.youtube.com/watch?v=TltduEuSvc4&feature=youtu.be

@question
What are some of the capacities, throughput and constraints the system should handle for?
i.e. Can you estimate the allocation of resources for our system?

@hint
One criteria might be the storage estimate. How should we figure out how much to store?

@hint
Another criteria could be the bandwidth estimate. How should we figure out the amount of data going through the network?

Where might be the bottlenecks?
    
@answer
Two capacity factors might be:
1. Storage capacity for the number of videos
2. Bandwidth capacity for the bytes streamed

In order to estimate the capacity of the video storage, we can work backward.

@question
How many videos would there be?

@hint
Remember to use easy to estimate numbers

@answer
We need to figure out:
1. How many daily active users (DAU) upload 
2. How many videos uploaded?
3. Over what amount of time?

If we assume 10 million DAU and 10% are uploaders, we will have **100,000** uploaders.
Let's say each uploader uploads 1 video a day, we will have 100,000 videos.

@question
What would be daily storage capacity needed for videos?

@answer
Each video could be estimated at ~500mb (half a gigabyte) we will then have 100,000 * 500 = 50,000,000mb => 50,000gb => 50TB daily

@question
We tackled the storage capacity, let's see how we can estimate the daily bandwidth.
What does bandwidth entail?

@answer
Bandwidth could mean how data is uploaded to our servers every minute.

@question
How much data would be uploaded a minute to our server

@answer
Since we have 50TB stored daily, that will be 50/24/60 ~> 50/25/60 ~> 2/60 ~> 1/30 ~= 0.03 TB per minute or 30 GB per minute
