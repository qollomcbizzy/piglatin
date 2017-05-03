
var isVowel = function(x){
  if(x.match(/[0-9]/)){
    return x;
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
