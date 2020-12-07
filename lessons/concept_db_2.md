@lesson_id
db1.2
@lesson_title
Database Non-relational Databases
@topic
db
@video_url

@answer
When would you use a non-relational database?

@answer
Your application requires super-low latency
Schema can be agnostic, allowing unstructured and semi-structured data to be stored and manipulated
You only need to serialize and deserialize data (JSON, XML, YAML, etc)
You need to store a massive amount of data

@question
What are types of non-relational database?

@answer
Key-value stores: (Redis, Amazon DynamoDB) simple DBMS that store only key-value pairs and provide basic functionality for retrieving the value associated with a known key
Wide column stores: (Cassandra, Scylla, HBase) schema-agnostic systems that enable users to store data in column families or tables, a single row of which can be thought as a record -- a multi-dimensional key-value store
Document stores: (MongoDB, Couchbase) schema-free systems that store data in the form of JSON documents. Document stores are similar to key-value or wide column stores, but the document name is the key and the contents of the document, whatever they are, are the value.
Graph Database: (Neo4j, Datastax Enterprise Graph) represent data as a network of related nodes or objects in order to facilitate data visualizations and graph analytics
Search Engines: (Elasticsearch, Spluk, Solr) store data using schema-free JSON documents. Similar to document stores, but with greater emphasis on making your unstructured or semi 