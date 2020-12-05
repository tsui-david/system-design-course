@lesson_id
chat_system4
@lesson_title
Design Chat System Data Layer
@topic
chat
@video_url
https://youtu.be/8cfUmeSpXbo

@question
What factors affect our choice for a database?

@hint
Think of the application and what type of data and how the data is accessed.

@answer
Read/write patterns. In our case:
1. Possibly billions of messages a day
2. Most frequently accessed are recent chats.
3. Take account for random access data such as search.

@question
What kind of database will we use?

@hint
Relational or non-relational database. Think of the data and data model that we're working with. 

@answer
The data that we're storing would be chat history, which require frequent read/write access. Users could potentially search for chats. With these in mind, we recommend using key-value stores due to:
1. Key-value stores allows for easy horizontal scaling.
2. Key-value stores have fast access to data.
3. Relational databases do not handle large indexes of data well. 