const quizDB=[
{
question:"Q1:Who is making the web standards?",
a:"Google",
b:"Mozilla",
c:"The World Wide Web Consortium",
d:"Microsoft",
ans:"ans3"
},
{
    question:"Q2: Which character is used to indicate an end tag?",
    a:"<",
    b:"/",
    c:">",
    d:";",
    ans:"ans2"
},

{
question:"Q3: What is the full form of CSS?",
    a:"Cascading style sheets",
    b:"Computer style sheets",
    c:"Creative style sheets",
    d:"Colorful style sheets",
    ans:"ans1"

},


{
    question:"Q4: Which HTML attribute is used to define inline styles?",
        a:"Class",
        b:"font",
        c:"styles",
        d:"style",
        ans:"ans4"
    
    },




    {
        question:"Q5: Which property is used to change the background color?",
            a:"color",
            b:"bgcolor",
            c:"background-color",
            d:"backgroundcolor",
            ans:"ans3"
        
        },
    
    



        {
            question:"Q6: Which CSS property is used to change the text color of an element?",
                a:"fgcolor",
                b:"color",
                c:"text-color",
                d:"font-color",
                ans:"ans2"
            
            },
        
        

            {
                question:"Q7: Which CSS property is used to the text size?",
                    a:"text-size",
                    b:"text-style",
                    c:"font-size",
                    d:"font-style",
                    ans:"ans3"
                
                },
            
            


                
                    {
                        question:"Q8: How do you make a list that lists its item with square?",
                            a:"list-style-type:square;",
                            b:"list:square;",
                            c:"list-type:square;",
                            d:"list:square;",
                            ans:"ans1"
                        
                        },
                    
                    



                        {
                            question:"Q9: What is the full form of SQL?",
                                a:"Structured Question Language",
                                b:"Strong Question Language",
                                c:"Structured Query Language",
                                d:"Structure Question Language",
                                ans:"ans3"
                            
                            },
                        
                        
                            {
                                question:"Q10: Which SQL statement is used to extract data from a database?",
                                    a:"EXTRACT",
                                    b:"SELECT",
                                    c:"OPEN",
                                    d:"GET",
                                    ans:"ans2"
                                
                                },
                            
                            





{
    question:"Q11: Which SQL statement is used to update data in database?",
        a:"MODIFY",
        b:"SAVE AS",
        c:"SAVE",
        d:"UPDATE",
        ans:"ans3"
    
    },


    {
        question:"Q12: Which SQL statement is used to return only different values?",
            a:"SELECT UNIQUE",
            b:"SELECT DIFFERENT",
            c:"SELECT DISTINCT",
            d:"SELECT ONLY",
            ans:"ans3"
        
        },


        {
            question:"Q13: How do you insert COMMENTS in C code?",
                a:"#This is a comment",
                b:"--This is a comment",
                c:"/*This is a comment",
                d:"//This is a comment",
                ans:"ans4"
            
            },




            {
                question:"Q14: How can you create a variable with the numeric value 5?",
                    a:"val num = 5;",
                    b:"num = 5 int;",
                    c:"int num = 5;",
                    d:"num = 5;",
                    ans:"ans3"
                
                },

                {
                    question:"Q15: Which data type is used to create a variable that should store text?",
                        a:"string",
                        b:"myString",
                        c:"String",
                        d:"Txt",
                        ans:"ans1"
                    
                    },
                
                       
                    {
                        question:"Q16: Which was the first purely object oriented programming language developed?",
                            a:"Kotlin",
                            b:"SmallTalk",
                            c:"java",
                            d:"C++",
                            ans:"ans2"
                        
                        },
                    
                        {
                            question:"Q17: which keyword is used to create a class in C++?",
                                a:"Class",
                                b:"class()",
                                c:"className",
                                d:"MyClass",
                                ans:"ans1"
                            
                            },
                        
                            
                            
                                                  
                                {
                                    question:"Q18: How do you create a function in C++?",
                                        a:"functionName()",
                                        b:"functionName[]",
                                        c:"(functionName)",
                                        d:"functionName",
                                        ans:"ans1"
                                    
                                    },


                                    {
                                        question:"Q19: Which operator can be used to compare two values?",
                                            a:"><",
                                            b:"==",
                                            c:"=",
                                            d:"<>",
                                            ans:"ans2"
                                        
                                        },
    



                                    
                                    {
                                        question:"Q20: How do you make the text bold?",
                                            a:"font:bold;",
                                            b:"style:bold;",
                                            c:"font-weight:bold;",
                                            d:"font-style:bold;",
                                            ans:"ans3"
                                        
                                        },
                                        
                                    
                                    
                                                          
                                
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');

let questionCount=0;
let score=0;

const loadQuestion= () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
option1.innerHTML = questionList.a;
option2.innerHTML = questionList.b;
option3.innerHTML = questionList.c;
option4.innerHTML = questionList.d;

}






loadQuestion();

 const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;

        }
        
    });
    return answer;

 };


 const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
 }
submit.addEventListener('click',() =>{

const checkedAnswer= getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer ==  quizDB[questionCount].ans){
    score++;
};

questionCount++;
deselectAll();



if(questionCount < quizDB.length){
    loadQuestion();
    
}else{
    showscore.innerHTML = `
    <h3>You Scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play Again</button>
    `;
    
    showscore.classList.remove('scorearea');
    
}

});





