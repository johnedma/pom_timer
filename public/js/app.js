(function() {
  //initialize variables
  var startButton = $("#start");
  var seconds = $("#seconds");
  var minutes = $("#minutes");

  //main functionality
  startButton.on("click", countdown);

  //function definitions
  function countdown(){
    var secondsText = seconds.text();
    var secondsTextAsNumber = parseInt(secondsText);
    var minutesText = minutes.text();
    var minutesTextAsNumber = parseInt(minutesText);

    if(minutesTextAsNumber === 0 && secondsTextAsNumber === 0){
      // stop
      return;
    }
    if(secondsTextAsNumber === 0) {
      if(minutesTextAsNumber !== 0){
      var decreasedMinutesAsNumberByOne = minutesTextAsNumber - 1;
      var padMinutesTextAsNumber = pad(decreasedMinutesAsNumberByOne);
      minutes.text(padMinutesTextAsNumber);
    }

    seconds.text("59");

    } else {
      var decreasedSecondsAsNumberByOne = secondsTextAsNumber - 1;
      var padSecondsTextAsNumber = pad(decreasedSecondsAsNumberByOne);
      seconds.text(padSecondsTextAsNumber);
    }
  }

    function pad(num){
      if(num < 10){
        // spit out number with a leading zero
        return "0" + num;
      } else {
        // spit out the original number
        return num;
      }

    }
}());
