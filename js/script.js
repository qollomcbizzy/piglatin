
var isVowel = function(x){
  //checks if the number is a non alphanumeric
  if(x.match(/[0-9]/)){
    return x;
  }
  //checks if the first single-letter is a vowell and ass 'ay' to it
  else if(x.match(/[aeiou]/) && x.length === 1){
  return x+"ay";
   }
   //checks first if a word starts with consonant
   else if(x.charAt(0).match(/[bcdfghjklmnpqrstvwxyz]/)){
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
