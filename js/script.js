var isVowel = function(x){
  if(x==="a",x==="e",x==="i",x==="o",x==="u"){
  return true;
   }
   else{
     return false;
   }
};

//jquery user interface
$(document).ready(function(){
  $("form#piglatin").submit(function(event){
    event.preventDefault();
  var sentence=$("input#sentence").val();
  var result=isVowel(sentence);
  $("#result").text(result);
});
});
