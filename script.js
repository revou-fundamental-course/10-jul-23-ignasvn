var submitButton = document.getElementById("submitButton");

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero.';
  }
  return a / b;
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var beratBadanValue = document.getElementById("inputBeratBadan").value;
    var usiaValue = document.getElementById('inputUsia').value;
    var tinggiBadanValue = document.getElementById('inputTinggiBadan').value;
    nameValidation(beratBadanValue, usiaValue, tinggiBadanValue);
  })

function nameValidation(bBadan, uUser, tBadan) {
  if (bBadan == "" || uUser == "" || tBadan == "") {
    alert("Anda belum melengkapi data, silahkan isi data!!!");
  }else{
    alert("Sukses, Anda telah melengkapi semua data");
    
    var beratBadanFloat = parseFloat(bBadan);
    var usiaFloat = parseFloat(uUser);
    var tinggiBadanFloat = parseFloat(tBadan);

    var ConvertTinggiMeter = divide(tinggiBadanFloat, 100);
    var CountTinggi = multiply(ConvertTinggiMeter, ConvertTinggiMeter);
    var HasilBMI = divide(beratBadanFloat, CountTinggi);

    var HasilBMIText = HasilBMI.toFixed(3).toString();
    updateUI(bBadan, uUser, tBadan, HasilBMIText);
    statusbmi(HasilBMI);
  }
}

function updateUI(bBadan, uUser, tBadan, HasilBMIText) {
  var bBadanOutput = document.getElementById("bBadanOutput");
  bBadanOutput.textContent = bBadan;
  var usiaOutput = document.getElementById("usiaOutput");
  usiaOutput.textContent = uUser;
  var tBadanOutput = document.getElementById("tBadanOutput");
  tBadanOutput.textContent = tBadan;
  var resultBMIOutput = document.getElementById("resultBMIOutput");
  resultBMIOutput.textContent = HasilBMIText;
}

function statusbmi(bmi) {
  var resultDiv = document.getElementById("result");
  var outputText = "";

  if (bmi < 18.5) {
    outputText = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi < 25) {
    outputText = "Normal (Ideal)";
  } else if (bmi >= 25 && bmi < 30) {
    outputText = "Kelebihan berat badan";
  } else if (bmi >= 30) {
    outputText = "Kegemukan (Obesitas)";
  } else {
    outputText = "Error";
  }
 // Update the resultDiv with the outputText
 resultDiv.textContent += " | " + outputText;
}

// console.log();
