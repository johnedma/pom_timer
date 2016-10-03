
 (function() {
  //initialize variables
  var startButton = $("#start");
  var seconds = $("#seconds");
  var minutes = $("#minutes");
  var breakButton = $("#break");
  var toptext = $("#toptext");
  var pic = $("#pic");
  var isOnBreak = false;
  var timerInterval;

  var oldSrc = 'https://media.giphy.com/media/l0HFi6Elu4pZEP2ec/giphy.gif';
  var newSrc = 'http://juliewinegard.com/images/obama.gif';

  document.body.style.backgroundColor = "black"


  //main functionality
  pic.hide();
  startButton.on("click", startTimer);
  breakButton.on("click", startBreak);

  //function definitions
  $("body").css("color", "white");

  function startBreak(){
    // on break
    isOnBreak = true;
    // set minutes to 5 minutes
    minutes.text("00");
    // set the seconds to 0 sec
    seconds.text("05");
    // hide the break button
    breakButton.hide();
    // start the timer

    startTimer();
  }

  function startTimer(){
    if(!timerInterval){
      timerInterval = setInterval(countdown, 1000);
    }
  }

  function countdown(){
    var secondsText = seconds.text();
    var secondsTextAsNumber = parseInt(secondsText);
    var minutesText = minutes.text();
    var minutesTextAsNumber = parseInt(minutesText);
    toptext.hide(1);
    if(minutesTextAsNumber === 0 && secondsTextAsNumber === 0){
      // stop
      clearInterval(timerInterval);
      timerInterval = null;
      if(!isOnBreak){

        // disable the start button
        startButton.attr('disabled', true);
        // unhide the break button
        breakButton.show();
        toptext.text("YOU'RE BALLIN!");
        toptext.show();
        pic.show();

      }else {
        seconds.text("05");
        minutes.text("00");
        startButton.attr("disabled", false);
        isOnBreak = false;
        pic.hide();
        $('img[src="' + oldSrc + '"]').attr('src', newSrc);

        toptext.text("BACK AT IT AGAIN!");
        toptext.show();

      }
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
