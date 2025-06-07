function handleRadioOther() {
    document.getElementById("other-text").focus();
}

function otherTextClicked() {
    document.getElementById("other").checked = 'checked';
}

function handleTextInput(value){
  if (value.length <= 250) {
    document.getElementById("textInputCounter").innerHTML = value.length;
  } else {
    document.getElementById("textInputCounter").innerHTML = 250;
  }
}

function handleSubmit() {
    alert("You've just saved your form data and submitted to server!");
}