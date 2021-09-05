// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { nodeName } from "jquery"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
require("jquery");
require("packs/move_btn");

function displayAudio(el, audio){
   if(el.matches("#id_choose_yes")){
    audio.play();
    el.classList.toggle("disabled");
  };
};


function displayAudio2(el, audio){
  if(el.matches("#id_listen_event")){
   audio.play();
   el.classList.toggle("disabled");
 };
};

function hideButton(){
  var myBtn = document.getElementById("id_listen_event");
  var myText = document.getElementById("id_send_love");
  var groupBtn = document.getElementById("id_answer");
  console.log(groupBtn);
  myBtn.style.display = "none";
  myText.style.display = "block";
  groupBtn.style.display = "flex";
  console.log( myBtn.style.display);
};

$(document).ready(function(){

  $(document).on("click", '#id_choose_yes', function(event){
    let audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-retro-arcade-casino-notification-211.mp3');
    let el = event.target;
    displayAudio(el, audio);
  });

  $(document).on("click", '#id_listen_event', function(event){
    let audio = new Audio('https://cf-media.sndcdn.com/C6etsQpkYxnl.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vQzZldHNRcGtZeG5sLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjMwODE2OTA4fX19XX0_&Signature=NU0W1zzsoh90uRCKZl5KLkNFiTsexruHp69NocC~aFVt4lXutAThvLEchvQRQz7efIQE4H2m3gx~ZC08fk1Lm2WTpVh1mXtg4nbtscwsx6Mpv0Bt1ILSRH6vXg5blegYRrusoSTse82Nk7AVoN7cn2amIbm~pupEI5W8LNW-QYFbpyp2CDqN0hw-M23sbM9rHe-OsrBhwlSUt0w-x1geRtAG5bwOjKaxErPjFEKuaLMHvwER3-rQedI3TmA69sIRLnEeNRWKgsRMrMxe58vFDviS1jcjPxar43j0JB1zzp9CDejTONKvpqRGP2qXAK8NO6Ov4NoAkrlVUY8728pLAg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ');
    let el = event.target;
    displayAudio2(el,audio);
    hideButton();


  });



});
