
$( document ).ready(function() 
{
   var quizcontainer   = $('')
   var resultsontainer = $('')
   var submitButton    = $('')

            console.log( "ready!" );
        var count = 60;
        setInterval(function() 
        {
            count--;                   console.log("counter: " + count);
            $('#timer').text(count);

            // update timer here

            if (count === 0) {
                count = 30;
                // ajax code here
                $('#secsleft').text(count);
            }
       }, 1000);

    //on submit, show resuls
    //submitButton.('click, showResults);

    function buildQuiz()
    {
         
    };

    function showResults()
    {
         
    };
    
    var myQuestions =  
        [
           {
                question: "Who wrote the novel 'War and Peace'?",
                answer:
                {
                    a: "Anton Cheknov",
                    b: "Leo Tolstoy",
                    c: "Fyodor Dostoyevsky"
                },

                correctAnser:"B"
            },
          
            {
                question: "In what year did Father's Day become a federal holiday'?",
                answer:
                {
                    a: "1962",
                    b: "1967",
                    c: "1972"
                },
    
                correctAnswer: "C"
            },

            {
                question: "What company created the first computer?",
                answer:
                {
                    a: "Osborne Computers",
                    b: "Macintosh",
                    c: "HP"
                },
    
                correctAnswer: "A"
            },       
        ]

    //for each available answer
    for (letter in currentQuestion.answer)
        {
            answers.push 
            (
                <label>
                    <input type+"radio" name="question${questionNumber}" value="${letter}">
                    ${letter};
                    ${currentQuestion.ansers[letter]}
                </label>
            );
        }

        output.push
          (
              '<div class="question"> ${currentQuestion.question} </div>,
               <div class="answer"> ${answers.join('')} </div>'
          );
    // add html radio buttons
    
});