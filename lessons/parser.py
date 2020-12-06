import json
import os
from pathlib import Path
import itertools


def find_link(line):
    return 0


filelist = []
lessons = {}
# finds all the markdown files and add them to a list
for file in os.listdir(Path().absolute()):
    if file.endswith('.md'):
        filelist.append(file)

# goes through every markdown file and parses the file
for file in filelist:
    with open(file, 'r', encoding='utf8') as f:
        lesson = file.replace('.md', '')
        current_lesson = {'questions':[]} # json_out is what will be written in json
        data = []   # this holds the annotations and its contents as a list of lists
        hints = []  # this holds all the hints per question
        new_question = False    # a flag for each question block
        question_dict = {}  # dictionary to separate individual questions with its hints and answer

        for line in f:
            if line.startswith('@'):
                data.append([line.rstrip()])
            elif line == '' or line == '\n':
                continue
            else:
                data[-1].append(line)
        
        for item in data:
            # print(item)
            if 'question' in item[0] and new_question == True:  # this adds a new question block to the json output when it encounters a new question
                question_dict['hints'] = hints
                current_lesson['questions'].append(question_dict)
                question_dict = {}
                hints = []
                new_question = False                
            if 'question' in item[0] and new_question == False:   # adds the question to the question block
                new_question = True
                question_dict['question'] = ' '.join(item[1:]).replace('\n', '')
                # print(question_dict['question'])
            elif 'hint' in item[0]:   # appends the hints to the hint list
                hints.append(' '.join(item[1:]).rstrip())
            elif 'answer' in item[0]: # adds the answer to the question block
                question_dict['answer'] = ' '.join(item[1:]).rstrip()   
            else:
                current_lesson[item[0].replace('@', '')] = ' '.join(item[1:]).rstrip() # adds the remainder annotations such as lesson id, video url, etc.
        question_dict['hints'] = hints
        current_lesson['questions'].append(question_dict)
        # print(question_dict)

        lessons[lesson] = current_lesson
        # print(json.dumps(lessons, indent=4, sort_keys=True))

# Using a different way to get python path because for some reason path library doesn't work
# it doesn't work in py2 but does in py3
from os.path import dirname, abspath
d = dirname(dirname(abspath(__file__))) + '/webui/src/generated/data.json'
with open(d, 'w+') as outfile:
    outfile.write(json.dumps(lessons, indent=4, sort_keys=True))