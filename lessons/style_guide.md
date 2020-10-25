# Lessons
Contains all the course content that will then be parsed and generated for the web app

## Content Format
There will be several special annotations to allow webapp to parse and generate dynamically.
Each annotation will be of the format: `@<annotation_type>:<id>

1. `@lesson_id:<id>` describes the id of the lesson and helps to generate the path to the lesson. A path generated might look like: `http://www.systemdesigncourse.com/lessons/<id>`
2. `@lesson_title:<title>` describes the title that will be at the top of the lesson
3. `@video_url:<url>` will hold the youtube url to embed into the webpage
4. `@question` will have the question for the lesson. Can have several questions per lesson
5. `@hint` will be shown as possible hints to guide the user before showing the answer
6. `@answer` answer for the question immediately above it
7. `@link:[](<id>)`: create a link to the lesson id. If you leave the text in `[]` blank, the web page will replace it with the `lesson_title` of that lesson. 

Example:
```
@lesson_id:db1
@lesson_title:Database Introduction
@link[](db1) ---> [Database Introduction](http://www.systemdesigncourse.com/lessons/db1)
```
