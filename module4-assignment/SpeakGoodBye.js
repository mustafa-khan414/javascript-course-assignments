// STEP 6–9: Fixed and Complete SpeakGoodBye.js
(function (window) {
  // STEP 7: Create byeSpeaker object
  var byeSpeaker = {};

  // DO NOT attach speakWord to byeSpeaker
  var speakWord = "Good Bye";

  // STEP 8: Attach the speak method to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);

