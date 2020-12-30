length = document.getElementById('recLength');
width = document.getElementById('recWidth');
cal = document.getElementById('calculate');
cals = document.getElementById('cals');
resultLength = document.getElementById('resultLength');
resultWidth = document.getElementById('resultWidth');
resultPerimeter = document.getElementById('resultPerimeter');
resultArea = document.getElementById('resultArea');
digits = document.getElementById('digits');
resultNumber = document.getElementById('resultNumber');
resultSum = document.getElementById('resultSum');

cal.addEventListener('click', function(){
    recLength = length.value;
    recWidth = width.value;
    calPerimeter = (recLength * 2 + recWidth * 2);
    calArea = recLength * recWidth;

    resultLength.innerText = recLength;
    resultWidth.innerText = recWidth;
    resultPerimeter.innerText = calPerimeter;
    resultArea.innerText = calArea;
})


cals.addEventListener('click', function(){
    number = digits.value;
    dozens = Math.floor(number / 10);
    unit = number % 10;
    resultSum.innerText = dozens + unit;
    resultNumber.innerText = number;
})
