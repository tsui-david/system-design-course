import json
import os
import pathlib
import itertools


def find_link(line):
    return 0


filelist = []

# finds all the markdown files and add them to a list
for file in os.listdir(pathlib.Path().absolute()):
    if file.endswith('.md'):
        filelist.append(file)

# goes through every markdown file and parses the file
for file in filelist:
    with open(file, 'r', encoding='utf8') as f:
        lesson = file.replace('.md', '')
        json_output = {lesson:{'questions':[]}} # json_out is what will be written in json
        data = []   # this holds the annotations and its contents as a list of lists
        hints = []  # this holds all the hints per question
        new_question = False    # a flag for each question block
        question_dict = {}  # dictionary to separate individual questions with its hints and answer

        for line in f:
            line = line.rstrip()
            if line.startswith('@'):
                data.append([line.rstrip()])
            elif line == '':
                continue
            else:
                data[-1].append(line.rstrip())

        for item in data:
            if 'question' in item[0] and new_question == True:  # this adds a new question block to the json output when it encounters a new question
                question_dict['hints'] = hints
                json_output[lesson]['questions'].append(question_dict)
                question_dict = {}
                hints = []
                new_question = False                
            if 'question' in item[0]:   # adds the question to the question block
                new_question = True
                question_dict['question'] = ' '.join(item[1:])
            if 'hint' in item[0]:   # appends the hints to the hint list
                hints.append(' '.join(item[1:]))
            if 'answer' in item[0]: # adds the answer to the question block
                question_dict['answer'] = ' '.join(item[1:])   
            else:
                json_output[item[0].replace('@', '')] = ' '.join(item[1:]) # adds the remainder annotations such as lesson id, video url, etc.

    writefile = str(pathlib.Path().absolute())+'\json'+'\\'+lesson+'.json' # file output path in json
    with open(writefile, 'w') as outfile:
        json.dump(json_output, outfile)