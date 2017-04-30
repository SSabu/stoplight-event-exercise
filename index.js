(function(window, document) {
  'use strict';

  // YOUR CODE HERE

  /*
     Selectors
  */

  let stopControl = document.querySelector('#stopButton');
  let stopLight = document.querySelector('#stopLight');
  let slowControl = document.querySelector('#slowButton');
  let slowLight = document.querySelector('#slowLight');
  let goControl = document.querySelector('#goButton');
  let goLight = document.querySelector('#goLight');

  let buttons = document.querySelectorAll('.button');
  let lights = document.querySelectorAll('.bulb');


  /*
     Methods
  */


  function changeToRed(event){
    if(stopLight.className.includes('stop')){
      stopLight.className = "bulb";
      stopControl.className = "button";
    } else {
      stopLight.className += " stop";
      stopControl.className +=" on";
    }
  }

  function changeToGreen(event){
    if(goLight.className.includes('go')){
      goLight.className = "bulb";
    } else {
      goLight.className += " go";
    }
  }

  function changeToYellow(event){
    if(slowLight.className.includes('slow')){
      slowLight.className = "bulb";
    } else {
      slowLight.className +=" slow";
    }
  }

  function buttonEnteredAlert(event){
    console.log("Entered "+event.target.innerHTML+" Button");
  };

  function buttonLeftAlert(event){
    console.log("Left "+event.target.innerHTML+" Button");
  };

  /*
     Events
  */

  stopControl.addEventListener('click', changeToRed);
  slowControl.addEventListener('click', changeToYellow);
  goControl.addEventListener('click', changeToGreen);

  buttons.forEach((button) => button.addEventListener('mouseenter', buttonEnteredAlert));

  buttons.forEach((button) => button.addEventListener('mouseleave', buttonLeftAlert));

})(window, document);
