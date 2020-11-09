import json
import os
import pathlib
import itertools

filelist = []

for file in os.listdir(pathlib.Path().absolute()):
    if file.endswith('.md'):
        filelist.append(file)

for file in filelist:
    with open(file, 'r', encoding='utf8') as f:
        lesson = file.replace('.md', '')
        json_output = {lesson:{'questions':[]}}
        data = []
        annotation = []
        content = []
        hints = []
        new_question = False
        question_dict = {}
        for line in f:
            line = line.rstrip()
            if line.startswith('@'):
                data.append([line.rstrip()])
            elif line == '':
                continue
            else:

                data[-1].append(line.rstrip())
        for item in data:
            if 'question' in item[0] and new_question == True:
                question_dict['hints'] = hints
                json_output[lesson]['questions'].append(question_dict)
                question_dict = {}
                hints = []
                new_question = False                
            if 'question' in item[0]:
                new_question = True
                question_dict['question'] = ' '.join(item[1:])
            if 'hint' in item[0]:
                hints.append(' '.join(item[1:]))
            if 'answer' in item[0]:
                question_dict['answer'] = ' '.join(item[1:])
            if 'end' in item[0]:
                question_dict['hints'] = hints
                json_output[lesson]['questions'].append(question_dict)               
            else:
                json_output[item[0].replace('@', '')] = ' '.join(item[1:])

    writefile = str(pathlib.Path().absolute())+'\json'+'\\'+lesson+'.json'
    with open(writefile, 'w') as outfile:
        json.dump(json_output, outfile)
    # with open(lesson+'.json', 'w') as outfile:
    #     json.dump(json_output, outfile)