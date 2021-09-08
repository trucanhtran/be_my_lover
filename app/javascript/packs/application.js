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

function handleHideButton(){
  var myBtn = document.getElementById("id_listen_event");
  var myText = document.getElementById("id_send_love");
  var groupBtn = document.getElementById("id_answer");
  var mTexts = document.querySelectorAll(".m-text")
  console.log(groupBtn);
  for (const mText of mTexts){
    mText.classList.add("remove-text")
  }
  myBtn.style.display = "none";
  myText.style.display = "block";
  groupBtn.style.display = "flex";
  console.log( myBtn.style.display);
};

$(document).ready(function(){



  $(document).on("click", '#id_choose_yes', function(event){
    let audio = new Audio('assets/button_click');
    let el = event.target;
    displayAudio(el, audio);
  });

  $(document).on("click", '#id_listen_event', function(event){

    handleHideButton();

  });



});
