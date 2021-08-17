// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

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

$(document).ready(function(){

  $(document).on("click", '#id_choose_yes', function(event){
    let audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-retro-arcade-casino-notification-211.mp3');
    let el = event.target;
    displayAudio(el, audio);
  });

});
