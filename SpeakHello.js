// STEP 2–5: Fixed and Complete SpeakHello.js
(function (window) {
  // STEP 3: Create helloSpeaker object
  var helloSpeaker = {};

  // DO NOT attach speakWord to helloSpeaker
  var speakWord = "Hello";

  // STEP 4: Attach the speak method to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

