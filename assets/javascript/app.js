
$( document ).ready(function() 
{
    $('#quiz-board').hide();
    $('#GameOver').hide();
    $('#container').hide();
    $('#Your-LScore').hide();
    $('#relansws').hide();

    var qRight      = 0;  
    var qWrong      = 0;
    var allAnswered = 0;

    var $clickme = $('.btn'),
        $box = $('.box');

    
    $('#flip').click(function() 
       {
           $('#panel').slideDown('fast');
           $('#quiz-board').show();
       });
         //  $(this).text(($(this).text() === 'Hide' ? 'Start' : '')).next('.box').slideToggle();
         //  e.preventDefault();
      

    var count = 30;
    var cntDown =setInterval(function() 
          {
            count--;                   console.log("counter: " + count);
            $('#timer').text(count);

            // update timer here

            if (count === 0 || allAnswered === 4)
                {
                count = 0;
                clearInterval(cntDown);
                $('.q').hide();
                $('.exp').hide();
                $('.red').hide();
               // console.log("GAME OVER");
                $('#wins').text(qRight);
                $('#losses').text(qWrong);
                $('#container').hide();
                $('#h1tag').hide();
                $('#flip').hide();
                $('#panel').hide();
                $('#GameOver').show();
                $('#Your-LScore').show();
                $('#relansws').show();

                //("GAME OVER: Correct Answers: " + qRight + " Wrong Answers: " + qWrong);
                }
          }, 1000);

    
    $(function() 
        {
            $('.exp').hide();
            $('.red').hide();
            $('input[name="test"]').on('click', function() 
            {
            var Plyrsanswr = $(this);
            if (Plyrsanswr.val() == 'ans') 
                {
                    Plyrsanswr.parents('.q').nextAll('.exp').first().show();
                    Plyrsanswr.parents('.q').nextAll('.red').first().hide();
                    $('.ans').hide();
                    qRight = qRight + 1;
                    allAnswered = allAnswered +1;
                    console.log("Correct answwers: " +qRight);

                 } 
            else 
                {
                    Plyrsanswr.parents('.q').nextAll('.red').first().show();
                    Plyrsanswr.parents('.q').nextAll('.exp').first().hide(); 
                    qWrong = qWrong + 1;
                    allAnswered = allAnswered +1;
                    console.log("Incorrect answwers: " +qWrong);
                }
            })
        })        
});
   

