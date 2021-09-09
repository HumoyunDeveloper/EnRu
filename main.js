

window.onload = init;


const englishLettersArray = [
    "a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];

const englishCapLettersArray = [
    "A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];
const russianLettersArray = [
    "А", "Б", "С", "Д", "Е", "Ф", "Г", "Х",
        "И", "Ж", "К", "Л", "М", "Н", "О", "П", "К", "Р", "С", "Т", "У", "В", "В", "Х", "Й", "З"
  ];

const russianCapLettersArray = [
    "а", "б", "с", "д", "е", "ф", "г", "х",
        "и", "ж", "к", "л", "м", "н", "о", "п", "к", "р", "с", "т", "у", "в", "в", "x", "й", "з"
  ];

var array = [];

function init() {
  var input = document.getElementById("input");
  var button = document.getElementById("view");
  var placeToDisplay = document.getElementById("result");
  var resetBtn = document.querySelector("#reset");
  var resetAll = document.querySelector("#reset-all");

  button.addEventListener("click", viewResult);
  resetAll.addEventListener("click", resetAllArea);
  reset.addEventListener("click", resetInput);


  window.ondevicemotion = (event) => {
    if (event.acceleration.x <= -30 && event.acceleration.z <= 2) {
      var confirmResult = confirm("Tozalamoqchimisiz?");
      confirmResult ? input.value = "" : "";
    }
  }


  function resetInput() {
    input.value = "";
  }

  function resetAllArea() {
    input.value = "";
    placeToDisplay.innerHTML = "Text shu yerda korinadi siz uni nushalab olishingiz mumkin.";
  }

  function viewResult() {
    var value = input.value;
    array = [];
    var softVal = "";

    for (var len = 0; len < value.length; len++) {
      array.push(value.charAt(len));
    }

    array.forEach((letter, index) => {
      russianLettersArray.forEach((rletter, rindex) => {
        englishCapLettersArray.forEach((ecletter, ecindex) => {
          englishLettersArray.forEach((eletter, eindex) => {

            if (letter === eletter || letter === ecletter) {
              if (letter === ecletter) {
                array[index] = russianLettersArray[ecindex];
              } else {
                array[index] = russianCapLettersArray[eindex];
              }
            }
          });
        });
      });
    });


    
    softVal = array.toString().replace(/,/gi, "");
    var replaceYa = softVal.replace(/йа/gi, "я");
    var replaceYu = replaceYa.replace(/йу/gi, "ю");
    var replaceCh = replaceYu.replace(/sx/gi, "ш");
    var replaceSh = replaceCh.replace(/cx/gi, "ч");
    


    placeToDisplay.innerHTML = replaceSh;
  }
}

