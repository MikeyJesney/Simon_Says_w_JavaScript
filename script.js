
var sequence = []; //change to random?
var extra = [];
var count = 1;
var userInputs=[];
var i;
var j=0;
var x;



// IMPORTANT if it's the same color twice in a row, there needs to be more of a break :)


function begin(){
  
  x = setInterval (function(){
    
  if(sequence[j]==0){
    setTimeout(function(){
      $("#audio1")[0].play();
  $("#red").animate({opacity: '1.0'})}, 500);
  extra.push(0);
    console.log(0);
    setTimeout(function(){
    $("#red").animate({opacity: '0.3'})}, 1000);
         
  }
    
    if(sequence[j]==1){
      setTimeout(function(){
        $("#audio2")[0].play();
  $("#yellow").animate({opacity: '1.0'})}, 500);
  extra.push(1);
      console.log(1);
    setTimeout(function(){
    $("#yellow").animate({opacity: '0.3'})}, 1000);
  }
    
    if(sequence[j]==2){
      setTimeout(function(){
        $("#audio3")[0].play();
  $("#green").animate({opacity: '1.0'})}, 500);
  extra.push(2);

      console.log(2);
    setTimeout(function(){
    $("#green").animate({opacity: '0.3'})}, 1000);
         
  }
    
    if(sequence[j]==3){
      setTimeout(function(){
        $("#audio4")[0].play();
  $("#blue").animate({opacity: '1.0'})}, 500);
  extra.push(3);

      console.log(3);
    setTimeout(function(){
    $("#blue").animate({opacity: '0.3'})}, 1000);
         
  }
  
  
    j++;
   
  if(j>=count){
    clearInterval (x);
  } 
   }, 1000); 
} 


function check(){
  if(extra.length == userInputs.length){
    if(extra.join() == userInputs.join()){
    if(count == 20){
      setTimeout (function(){
        alert("Game Completed!");
        location.reload();
      }, 1000);
      }
      else{
         setTimeout (function(){
        $("#count").text(count);
           count++;
        extra = [];
        userInputs = [];
        j=0;
        begin();
      }, 1000);
      }
      }
      else{
      setTimeout (function(){
        $("#count").text("!!");
       $("#audio3")[0].play();
      //  $("#audio2")[0].play();
        $("#audio4")[0].play();
      //  $("#audio1")[0].play();
        extra = [];
        userInputs = [];
        j=0;
        begin();
      }, 1000);
      }
    }
    }
        
   

     
  







  $("#on").click(function(){
    for(var i=0;i<20;i++){
    sequence[i] = Math.floor(Math.random()*4);
  }
   console.log(sequence);
  });

$("#start").click(function(){
  
  begin();
});


//Button Controls and Feedback

$("#red").click(function(){
  $("#audio1")[0].play();
  $("#red").animate({opacity: '1.0'});
  userInputs.push(0);
  setTimeout(function(){
  $("#red").animate({opacity: '0.3'})}, 1000);
  check();
});

$("#yellow").click(function(){
  $("#audio2")[0].play();
  $("#yellow").animate({opacity: '1.0'});
  userInputs.push(1);
  setTimeout(function(){
  $("#yellow").animate({opacity: '0.3'})}, 1000);
  check();
});

$("#green").click(function(){
  $("#audio3")[0].play();
  $("#green").animate({opacity: '1.0'});
  userInputs.push(2);
  setTimeout(function(){
  $("#green").animate({opacity: '0.3'})}, 1000);
  check();
});

$("#blue").click(function(){
  $("#audio4")[0].play();
  $("#blue").animate({opacity: '1.0'});
  userInputs.push(3);
  setTimeout(function(){
  $("#blue").animate({opacity: '0.3'})}, 1000);
  check();
});

$('#off').on('click', function () {
        location.reload();
    });

  