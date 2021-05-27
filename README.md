# n4m-sentiment
Sentiment analysis for your MaxMSP patches using [Node For Max](https://github.com/Cycling74/n4m-core-examples) using the [Sentiment](https://github.com/thisandagain/sentiment) Node.js module. 

https://user-images.githubusercontent.com/43569216/119861400-b33ccc00-bf5a-11eb-9600-15dff34ffa49.mp4

## Features
Analyses your text using the [AFINN-165](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010) wordlist and [Emoji Sentiment Ranking](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0144296) to perform sentiment analysis on arbitrary blocks of input text.


## Installation
Use the `script npm install` message the first time you run the patch

## Run
1. Use the `script start` message every time you run the patch
2. prepend `analyse` to any text string and send to `node.script`
3. Inspect the keys and values in the dictionary that is output
    * **Score**: Score calculated by adding the sentiment values of recognized words.
    * **Comparative**: Comparative score of the input string.
    * **Calculation**: An array of words that have a negative or positive valence with their respective AFINN score.
    * **Token**: All the tokens like words or emojis found in the input string.
    * **Words**: List of words from input string that were found in AFINN list.
    * **Positive**: List of positive words in input string that were found in AFINN list.
    * **Negative**: List of negative words in input string that were found in AFINN list. 

# Example patch
1. try the example sentences in the messages
2. type your own
3. check out the n4m-sentiment.js script



