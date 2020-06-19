(function(window){
var speakWord = "Good Bye";
var bye={};
bye.speak= function speak(name) {
  console.log(speakWord + " " + name);
}
window.bye=bye;

})(window);

