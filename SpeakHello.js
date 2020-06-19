(function(window){
var speakWord = "Hello";
var hello={};
hello.speak=function speak(name){
    console.log(speakWord + " " + name);
};
window.hello=hello;
})(window);
