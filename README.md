# Anykka is an App which makes this world a better place!

[![Node CI](https://github.com/hexlet-boilerplates/fastify-nodejs-application/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-boilerplates/fastify-nodejs-application/actions)

## Setup

```bash
make setup
```

## Run

```bash
$ make start
# Open localhost:5000
```

---

## Documentation

### Main Idea
The main idea behind this App is to create a Signal from a Noise.

What is a Signal?
A Signal is a peace of information that creates cognitive load (makes sense).


#### What is Noise?
Noise is a peace of information that doesn't make sense for a person but objectively contains cognitive load.

#### How to create a Signal from Noise?
Any language when a person tries to deal with, doesn't make any sense in the beginning even our mather language. After some repetitions which we don't even remember we start to understand it (i.e. we create Signals) little by little.
The same does this App, you choose some text (Noise) and work with that Noise and little by little it starts making sense i.e. creates a Signal.

#### What does it mean to work with Noise?
For example you have some text in foreign language. It can be audio, a text, or both. Let's assume it's a text. Usually the text consists of paragraph then sentences then words then letters. The minimum utility that has cognitive load is a word. To understand a language you should understand the meaning of words and then create phrases and so on.
To learn a list of words that is the main task of learning a language. That's all what this App is about to help a person to learn words with the help of some text or audio.
Now let's dive into some details: 
- We take the text split it into unique words 
- Each word should be learned (we have some metadata about learning process)
- Learning process is about splitting the text into sentences and learn words guessing the meaning of this sentence
- when you work enough with sentences you create a Signal from Noise. (i.e when you see or hear them you understand it).

### Technical elements

#### DB elements (tables)
##### Users
A user should have:
- name
- email
- password
- phone number
- native language
- target languageID
- target language wordsID
##### Languages
A language should have:
- some materials from users

##### Texts
A text should have:
- languageID 
- title
- text
- userID

##### Sentences ? (Do I need to save sentences in DB? )
##### Words
A word should have: 
- name
- attempts 
- correct answers
- userID

#### Logic 

##### StartLearning
This is one section of App logic that is responsible for preparing the text and learning words after that.

View:
    1.0 /start: shows the page with existing texts (if exist) and New Text
        1.1 /learn:
            - starts learning chosen words (learnText)
        1.2 /new:
            - creates new text 
        1.3 /prepare:
            - starts preparing the text (prepareText)
            - after success goes into "/start"

Functions logic:
    1.0 prepareText
        1.1 split the text into uniq words and save each one into DB
        1.2 save text as well
    2.0 learnText
        2.1 split text into sentences 
        2.2 select words from DB and choose a sentence with the selected word:
            SelectWord (subsection of StartLearning)
                This subsection is responsible for:
                 - select the word
                 - change info about this word based on users answers

    - save words with updated data