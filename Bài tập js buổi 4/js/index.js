sortResult = document.getElementById('sortResult');
document.getElementById('btnCalculate').addEventListener('click', function () {
    txtNumber1 = +document.getElementById('txtNumber1').value;
    txtNumber2 = +document.getElementById('txtNumber2').value;
    txtNumber3 = +document.getElementById('txtNumber3').value;
    document.getElementById('txtResultNum1').innerHTML = " " + txtNumber1;
    document.getElementById('txtResultNum2').innerHTML = " " +txtNumber2;
    document.getElementById('txtResultNum3').innerHTML = " " +txtNumber3;
    if (txtNumber1 > txtNumber2){
        if (txtNumber2 > txtNumber3) {
            sortResult.innerHTML = '[' + txtNumber3.toString() + ']' + ' - ' + '[' + txtNumber2.toString() + ']' + ' - ' + '[' + txtNumber1.toString() + ']';
        }
        else if(txtNumber1 > txtNumber3){
            sortResult.innerHTML = '[' + txtNumber2.toString() + ']' + ' - ' + '[' + txtNumber3.toString() + ']' + ' - ' + '[' + txtNumber1.toString() + ']';
        }else{
            sortResult.innerHTML = '[' +txtNumber2.toString() + ']' + ' - ' + '[' + txtNumber1.toString() + ']' + ' - ' + '[' + txtNumber3.toString() + ']';
        }
        
    }
    else if( txtNumber2 > txtNumber3){
        if(txtNumber1 > txtNumber3){
            sortResult.innerHTML = '[' + txtNumber3.toString() + ']' + ' - ' + '[' + txtNumber1.toString() + ']' + ' - ' + '[' + txtNumber2.toString() + ']';
        }
        else{
            sortResult.innerHTML = '[' + txtNumber1.toString() + ']' + ' - ' + '[' + txtNumber3.toString() + ']' + ' - ' + '[' + txtNumber2.toString() + ']';
        }
        
    }else{
    sortResult.innerHTML = '[' + txtNumber1.toString() + ']' + ' - ' + '[' + txtNumber2.toString() + ']' + ' - ' + '[' + txtNumber3.toString() + ']';
    }
});


resultWelcome = document.getElementById('resultWelcome');
document.getElementById('btnStart').addEventListener('click', function () {
    chooseUser = document.getElementById('chooseUser').value;
    switch (chooseUser) {
        case 'opText':
            resultWelcome.innerHTML= 'Hãy chọn người dùng'
            break;
        case 'opDad':
            resultWelcome.innerHTML = 'Chào Bố, chúc bố sức khỏe';
            break;
        case 'opMom':
            resultWelcome.innerHTML = 'Chào Mẹ, mẹ vẫn xinh đẹp';
            break;
        case 'opBrother':
            resultWelcome.innerHTML = 'Chào Anh trai, anh vẫn còn trai tân à?';
            break;
        case 'opYoungSis':
            resultWelcome.innerHTML = 'Chào Em gái, đi học bài đi em';
            break;
        default:
            resultWelcome.innerHTML = '<img src="https://imagizer.imageshack.com/img922/7067/YB6QoA.jpg" style="width: 100%; height: 108px" />';
            break;
    }
});


let odd, even = 0;

findResult = document.getElementById('findResult');
document.getElementById('btnFind').addEventListener('click', function () {
    txtNumberOne = +document.getElementById('txtNumberOne').value;
    txtNumberTwo = +document.getElementById('txtNumberTwo').value;
    txtNumberThree = +document.getElementById('txtNumberThree').value;
    document.getElementById('txtReNumber1').innerHTML = " " + txtNumberOne;
    document.getElementById('txtReNumber2').innerHTML = " " +txtNumberTwo;
    document.getElementById('txtReNumber3').innerHTML = " " +txtNumberThree;
    ArrayX = [txtNumberOne,txtNumberTwo,txtNumberThree];
    odd = ArrayX.reduce(function (r, a) { return r + a % 2; }, 0),
    even = ArrayX.length - odd;
    findResult.innerHTML = 'Has ' + odd + ' odd numbers' + '<br/>' + 'Has ' + even + ' even numbers';
});


checkResult = document.getElementById('checkResult');
document.getElementById('btnCheck').addEventListener('click', function () {
    txtEdgeA = Math.abs(+document.getElementById('txtEdgeA').value);
    txtEdgeB = Math.abs(+document.getElementById('txtEdgeB').value);
    txtEdgeC = Math.abs(+document.getElementById('txtEdgeC').value);
    document.getElementById('txtTriEdgeA').innerHTML = " " + txtEdgeA;
    document.getElementById('txtTriEdgeB').innerHTML = " " +txtEdgeB;
    document.getElementById('txtTriEdgeC').innerHTML = " " +txtEdgeC;
    if(txtEdgeA == 0 || txtEdgeB == 0 || txtEdgeC == 0){
        checkResult.innerHTML = 'Nothing';
    }else if(txtEdgeA == txtEdgeB &&  txtEdgeB == txtEdgeC){
        checkResult.innerHTML = 'This is an equilateral triangle';
    }else if((txtEdgeA == txtEdgeB || txtEdgeA == txtEdgeC || txtEdgeB == txtEdgeC)){
        checkResult.innerHTML = 'This is an isosceles triangle';
    }
    else{
        checkResult.innerHTML = 'This is an pitago triangle';
    }
});




