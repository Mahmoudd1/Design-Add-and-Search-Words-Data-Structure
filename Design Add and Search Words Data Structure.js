var WordDictionary = function() {
    this.root=new Node(null)
};
class Node{
    constructor(value)
    {
        this.value=value;
        this.childern=new Map();
        this.isEnd=false;
    }
}
/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let current=this.root;
    for (let char of word)
    {
        if (!current.childern.has(char))
        {
            current.childern.set(char,new Node(char))
        }
        current=current.childern.get(char)
    }
    current.isEnd=true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let current=this.root;
    flag=false;
    return dfs(word,current);
};
function dfs(word,current)
{
   // console.log(word,current);
    if (word.legth===0)
        return true;
    let char=word[0];
    if (word.length===1&&current.childern.size===0)
        return false;
    if (word.length===1)
    {
        if (char==='.')
        {
            for (let [,temp] of current.childern)
            {
                if (temp.isEnd)
                    return true;
            }
            return false;
        
        }
        else 
        {
            if (!current.childern.has(char))
            {
                return false;
            }
            current=current.childern.get(char);
            if (current.isEnd===true)
                 return true;
            else 
                return false;
        }
    }
    if (current.childern.size===0)
        return false;
    if (char==='.')
    {
        for (let [,temp] of current.childern)
        {
            if (dfs(word.substring(1,word.length),temp))
            {
                return true;
            }
        }
        return false;     
    }
    else 
    {
        if (!current.childern.has(char))
        {
            return false;
        }
        else 
        {
           return  dfs(word.substring(1,word.length),current.childern.get(char));
        }
    }
    
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
let wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("add");
wordDictionary.addWord("bat");
wordDictionary.search(".");
wordDictionary.search("b.");
