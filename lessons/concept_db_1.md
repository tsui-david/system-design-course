@lesson_id
db1.1
@lesson_title
Database Relational Databases
@topic
db
@video_url
https://youtu.be/OVqAdFq4198

@question
What should you do before choosing a database?

@answer
1. Understand the problem.
2. Define the data model early.
3. Explore your options.

@question
What are the two main types of databases?

@answer
Relational and non-relational

@question
When would one use a relational database?

@hint
Relational database: are also called relational database management system (RDBMS) or SQL database *some popular RDBMS are MySQL, Oracle DB, PostgresSQL

@answer
If the data is structured and if you're working with a schema that allows data to be organized into tables with columns and rows. 
All RDBMS are ACID-compliant.

@question
What are ways you can scale a relational database?

@hint
Think of methods to increase performance.

@answer
1. Vertical scaling
2. Sharding

@question
What is sharding?

@hint
Break up the database.

@answer
Sharding is the process of breaking up large tables into smaller chunks called shards that are spread across multiple servers. Instead of having the data on one node, it is instead a cluster of nodes. 

@question
What are two methods of sharding and how do they work?

@answer
1. Hash: takes a shard key's value and generates a hash value from it. The hash value is then used to determine in which shard the data should reside.
2. Range: divides the data based on ranges of the data value. Shard keys with nearby values are more likely to fall into the same range and onto the same shards.