(function(window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for(var i=0; i< names.length; i++)
  {
    var firstletter= names[i].charAt(0).toLowerCase();

  if (firstletter == 'j') {

    window.bye.speak(names[i]);
  } 
  else {
   window.hello.speak(names[i]);
  }
}
})(window);