total = 0;
number = 1;
check = document.getElementById('checkCheck');
document.getElementById('btnCheck').addEventListener('click', function () {
    integer = +Math.abs(document.getElementById('txtInteger').value);
    if(integer == 0){
        check.innerHTML = 'This is bug';
    }else {
        while (total < integer) {
            total += number; 
            console.log(number,total);
            number++;
            console.log( number,total);
            console.log('--');

        }
        document.getElementById('txtResultInteger').innerHTML = integer;
        document.getElementById('txtResultTotal').innerHTML = total;
        check.innerHTML = 'The smallest integer is: ' + --number;
    }
})


// 


document.getElementById('btnCalculate').addEventListener('click', function () {
    valueX = +Math.abs(document.getElementById('txtIntegerX').value);
    valueN = +Math.abs(document.getElementById('txtIntegerN').value);
    recipe(valueX,valueN);

})

function recipe(x,n) {
    var total = 0;
    for (let index = 1; index <= n; index++) {
        total = Math.pow(x,index);
    }
    document.getElementById('resultCalculate').innerHTML = 'Result: ' + total;
}

// 

function recipeFactorial() {
    var totalN = 1;
    var valueNum = +Math.abs(document.getElementById('txtIntegerNum').value);
    if(valueNum == 0){
        document.getElementById('resultCalculateN').innerHTML = 'This is bug';
    }else{
        for (let index = 1; index <= valueNum; index++) {
            totalN = totalN * index;
            console.log(index);
        }
        document.getElementById('resultCalculateN').innerHTML = 'Result: ' + totalN;
    }
}

// 
function generateButtons() {
    var i = 1;
    while (i<=10) {
        var div = document.createElement('div');
        div.className = "div-class";
        $('#resultGenerate').append(div);
        i++;
    }
    var divs = document.getElementsByClassName('div-class');
    for (let index = 0; index < divs.length; index++) {
        if((index + 1) % 2 == 0){
            divs[index].style.background = 'red';
        }else{
            divs[index].style.background = 'blue';
        }        
    }
}
