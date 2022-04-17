(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (let index = 0; index < names.length; index++) {
    var firstLetter = names[index].charAt(0);

    if (firstLetter == "j" || firstLetter == "J") {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }
})();
