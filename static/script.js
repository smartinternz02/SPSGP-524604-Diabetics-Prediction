function submitForm() {
    var pregnancies = document.getElementById('pregnancies').value;
    var glucose = document.getElementById('glucose').value;
    var bloodpressure = document.getElementById('bloodpressure').value;
    var skinthickness = document.getElementById('skinthickness').value;
    var insulin = document.getElementById('insulin').value;
    var bmi = document.getElementById('bmi').value;
    var dpf = document.getElementById('dpf').value;
    var age = document.getElementById('age').value;
  
    // Send an AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/predict', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var result = JSON.parse(xhr.responseText);
        document.getElementById('result').innerHTML = 'Diabetes Prediction: ' + result.prediction;
      }
    };
    var data = JSON.stringify({
      'pregnancies': pregnancies,
      'glucose': glucose,
      'bloodpressure': bloodpressure,
      'skinthickness': skinthickness,
      'insulin': insulin,
      'bmi': bmi,
      'dpf': dpf,
      'age': age
    });
    xhr.send(data);
  }
  