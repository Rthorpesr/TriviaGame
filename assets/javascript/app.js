
$( document ).ready(function() 
{
    var qRight      = 0;  
    var qWrong      = 0;
    var allAnswered = 0;

    var $clickme = $('.clickme'),
        $box = $('.box');

    $box.hide();

    $clickme.click( function(e) 
      {
        $(this).text(($(this).text() === 'Hide' ? 'Start' : '')).next('.box').slideToggle();
        e.preventDefault();
      });


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
                console.log("GAME OVER");
                confirm("GAME OVER: Correct Answers: " + qRight + " Wrong Answers: " + qWrong);
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
                    $('.red').hide();
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
   

