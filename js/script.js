/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $(".result").text(answer(totalScore));
    });
        
    function questionOne(q1Result){
        if (q1Result === "purple"){
            return 1;
        }
        else if (q1Result === "blue"){
            return 2;
        }
        else if (q1Result === "green"){
            return 3;
        }
    }
    
    function questionTwo(q2Result){
        if (q2Result === "french fries"){
            return 1;
        }
        else if (q2Result === "mash patotes"){
            return 2;
        }
        else if (q2Result === "green peas"){
            return 3;
        }
    }
    
    
    function questionThree(q3Result){
        if(q3Result ==="iphone"){
            return 3;
        }
        else if (q3Result ==="android"){
            return 2;
        }
        
    }
    
  function answer(totalScore){
      if (totalScore <= 4){
          return "Snapchat";
          
      }
      
     else if (totalScore >4 && totalScore <=  6){
          return "Instagram";
     }
     
     else if(totalScore> 6){
        return "Facebook";
     }
          
      
  }


});
