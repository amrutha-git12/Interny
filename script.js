function convert() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var unitFrom = document.getElementById('unitFrom').value;
    var unitTo = document.getElementById('unitTo').value;
    var result;

    if (unitFrom === 'm' && unitTo === 'km') {
      result = inputValue / 1000;
    } else if (unitFrom === 'km' && unitTo === 'm') {
      result = inputValue * 1000;
    } else if (unitFrom === 'cm' && unitTo === 'm') {
      result = inputValue / 100;
    } else if (unitFrom === 'm' && unitTo === 'cm') {
      result = inputValue * 100;
    } else if (unitFrom === 'cm' && unitTo === 'km') {
      result = inputValue / 100000;
    } else if (unitFrom === 'km' && unitTo === 'cm') {
      result = inputValue * 100000;
    }
    else if (unitFrom === 'c' && unitTo === 'f') {
      result = (inputValue * 9/5) + 32;
    } else if (unitFrom === 'f' && unitTo === 'c') {
      result = (inputValue - 32) * 5/9;
    }
    else if (unitFrom === 'kg' && unitTo === 'g') {
      result = inputValue * 1000;
    } else if (unitFrom === 'g' && unitTo === 'kg') {
      result = inputValue / 1000;
    } else if (unitFrom === 'kg' && unitTo === 'lb') {
      result = inputValue * 2.20462;
    } else if (unitFrom === 'lb' && unitTo === 'kg') {
      result = inputValue / 2.20462;
    }
    if (result !== undefined) {
      document.getElementById('result').innerText = result.toFixed(2);
    } else {
      document.getElementById('result').innerText = "Invalid conversion! Check the type";
    }
  }
  