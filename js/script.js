
var isVowel = function(x){
  //checks if the number is a non alphanumeric
  if(x.match(/[0-9]/)){
    return x;
  }
  //checks if the first single-letter is a vowell and ass 'ay' to it
  else if(x.match(/[a-u]/)){
  return x+"ay";
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
