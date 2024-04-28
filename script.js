function calculateIMC() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      document.getElementById('result').innerHTML = "Por favor, insira valores válidos.";
      return;
    }
  
    var imc = weight / (height * height);
    var message = "Seu IMC é " + imc.toFixed(2) + ". ";
  
    if (imc < 18.5) {
      message += "Você está abaixo do peso.";
    } else if (imc < 24.9) {
      message += "Você está com peso normal.";
    } else if (imc < 29.9) {
      message += "Você está acima do peso.";
    } else {
      message += "Você está obeso.";
    }
  
    document.getElementById('result').innerHTML = message;
  }