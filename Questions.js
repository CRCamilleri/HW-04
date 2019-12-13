//javascript
var questions = [
    { title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    { title: "What does i stand for in a For loop?",
      choices: ["varible", "index", "interger", " letter i "],
       answer: "varible"},
    { title: "If you wanted an action to done over and over you would use a ...?",
      choices: ["fuction", "forloop", "object", "array"],
      answer: "forloop"
    }
   // { title: " What do you use to call a function?"
//choices [""]}


]
  function playfunc () {
      document.getElementById ("questions").style.display="block"
      document.getElementById ("home").style.display="none"
      document.getElementById ("titleQ").innerHTML=questions [0].title
      document.getElementById ("q1").innerText=questions [0].choices [0] 
      document.getElementById ("q2").innerText=questions [0].choices [1]
      document.getElementById ("q3").innerText=questions [0].choices [2]
      document.getElementById ("q4").innerText=questions [0].choices [3]
      
      

  }
  

  