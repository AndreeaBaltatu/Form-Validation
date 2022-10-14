"use strict";
//folosesc aceasta functie verify ca sa fiu singura ca functioneaza butonul :))
function verify() {
  document.querySelector("[data-gender]").innerHTML = "YOU CLICKED ME!";
}

let button = document.querySelector("[data-submit-button]");
button.addEventListener("click", validateFName);
button.addEventListener("click", validateLName);
//dbutton.addEventListener("click", verify);
button.addEventListener("click", verifyRadioButton);
button.addEventListener("click", submit);

function validateFName() {
  let fname = document.querySelector("[data-fname]");
  let a = document.forms["myForm"]["fname"].value;
  if (a === "") {
    fname.classList.add("jsclass");
  }
  if (a.length <= 3) {
    fname.classList.add("jsclass");
  } else {
    fname.classList.remove("jsclass");
  }
  return true;
}
function validateLName() {
  let lname = document.querySelector("[data-lname]");
  let a = document.forms["myForm"]["lname"].value;
  if (a === "") {
    lname.classList.add("jsclass");
  }
  if (a.length <= 3) {
    lname.classList.add("jsclass");
  } else {
    lname.classList.remove("jsclass");
  }
  return true;
}

function submit() {
  let lname = document.querySelector("[data-lname]").value;
  let fname = document.querySelector("[data-fname]").value;
  let sub = document.querySelector("[data-sub-button]");
  let gender = document.querySelector("[data-radio-button]:checked");
  if (lname === "" || fname === "" || gender === null) {
    sub.classList.remove("disabled");
    sub.innerHTML = "<b>Please fill all the required fields!";
    lname.classList.add("jsclass");
    fname.classList.add("jsclass");
  }
  if (gender === null) {
    //atunci nu e bifat genderul
    let allGender = document.querySelectorAll("[data-radio-button]");
    for (let radio of allGender) {
      radio.classList.add("error");
      sub.classList.remove("disabled");
      sub.innerHTML = "<b>Please fill all the required fields!";
    }
  } else {
    let allGender = document.querySelectorAll("[data-radio-button]");
    for (let radio of allGender) {
      radio.classList.remove("error");
    }
  }

  if (lname.length <= 3 || fname.length <= 3) {
    sub.classList.remove("disabled");
    sub.innerHTML = "Names should contain atleast 3 letters";
    lname.classList.add("jsclass");
    fname.classList.add("jsclass");
  } else {
    sub.classList.remove("disabled");
    sub.innerHTML = "Thank you for contacting us " + fname + "!";
  }
}

function verifyRadioButton() {
  let gender = document.querySelector("[data-radio-button]:checked");
  if (gender === null) {
    //atunci nu e bifat genderul
    let allGender = document.querySelectorAll("[data-radio-button]");
    for (let radio of allGender) {
      radio.classList.add("error");
    }
  } else {
    let allGender = document.querySelectorAll("[data-radio-button]");
    for (let radio of allGender) {
      radio.classList.remove("error");
    }
  }
  console.log(fname.value, lname.value, gender.value);
}
