# Design-Add-and-Search-Words-Data-Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.

void addWord(word) Adds word to the data structure, it can be matched later.

bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

## example
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]

[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output

[null,null,null,null,false,true,true,true]

Explanation

WordDictionary wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");

wordDictionary.addWord("dad");

wordDictionary.addWord("mad");

wordDictionary.search("pad"); // return False

wordDictionary.search("bad"); // return True

wordDictionary.search(".ad"); // return True

wordDictionary.search("b.."); // return True

## This problem can be further broken down into sub-problems such as:

Choosing an appropriate data structure: Different data structures can be used to store and retrieve information about words, each with their own strengths and weaknesses. The choice of data structure will depend on factors such as the size of the data set, the frequency of queries, and the type of information being stored.

Designing efficient algorithms for adding and searching: Once the data structure has been chosen, efficient algorithms need to be designed for adding new words and searching for existing words. The goal is to minimize the time complexity of these operations, so that they can be performed quickly even on large data sets.

Handling collisions and conflicts: In some cases, multiple words may have the same spelling or pronunciation, but different meanings or contexts. The data structure needs to be designed to handle these collisions and conflicts, so that the correct information is returned for each query.

Overall, the problem of designing an "Add and Search Words Data Structure" is a challenging one that requires careful consideration of both the data and the algorithms used to manipulate it.
## steps

Use a Trie data structure to store the words: A Trie, also known as a prefix tree, is a tree-like data structure that is commonly used for storing strings. Each node in the Trie represents a letter in a word, and the edges represent the links between letters. To implement the Trie, we define a TrieNode class with two attributes: children, which is a dictionary that maps letters to child TrieNodes, and is_word_end, which is a boolean flag indicating whether the node represents the end of a word.

When adding a word to the Trie, traverse the Trie starting from the root node, and create new nodes as necessary to represent the letters in the word: To add a word to the Trie, we start at the root node and traverse the Trie one letter at a time, creating new nodes as necessary to represent each letter in the word. Once we reach the end of the word, we mark the final node as the end of a word by setting its is_word_end flag to True.

For searching, traverse the Trie again starting from the root node, and follow the appropriate edges based on the pattern. When a "." is encountered, check all possible child nodes: To search for words in the Trie, we start at the root node and traverse the Trie one letter at a time, following the appropriate edges based on the pattern. When we encounter a "." in the pattern, we need to check all possible child nodes, since the "." can represent any letter.

When you reach the end of a word in the Trie, mark the final node with a flag to indicate that it is the end of a word: To determine whether a pattern matches a word in the Trie, we check whether we have reached the end of a word in the Trie when we have exhausted the pattern. If we have reached the end of a word, we return True. Otherwise, we return False.
