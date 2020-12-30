const yearError = 'Year should not blank';
const yearLength = 'Year should be have 4 digits';
const monthRange = 'Month should be in range [1-12]';
const dayMonth2Leap = 'Day should be in range [1-29]';
const dayMonth2 = 'Day should be in range [1-28]';
const dayRangeOdd = 'Day should be in range [1-31]';
const dayRangeEven = 'Day should be in range [1-30]';

findResult = document.getElementById('findResult');
document.getElementById('btnFind').addEventListener('click', function () {
    txtDay = +document.getElementById('txtDay').value;
    txtMonth = +document.getElementById('txtMonth').value;
    txtYear = +document.getElementById('txtYear').value;
    chooseOption = document.getElementById('chooseOption').value;
    switch (chooseOption) {
        case 'opTomorrow':
            findTomorrow(txtDay,txtMonth,txtYear);
            break;
        case 'opTheDayBefore':
            findTheDayBefore(txtDay,txtMonth,txtYear);
            break;
        case 'opFindDay':
            findDayInMonth(txtDay,txtMonth,txtYear);
            break;
        default:
            findResult.innerHTML = 'Please select option';
            break;
    }
});



function findTomorrow(txtDay,txtMonth,txtYear) {
    txtTDay = document.getElementById('txtTDay');
    if (checkDayMonthYear(txtDay,txtMonth,txtYear) == true){
        txtTomorrowDay = txtDay + 1;
        if (checkLeapYear(txtYear)){
            if(txtMonth == 2){
                if(txtTomorrowDay > 29){
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear);
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 1 || txtMonth == 3 || txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10){
                if(txtTomorrowDay > 31){
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if ( txtMonth == 12){
                if (txtTomorrowDay > 31) {
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = 1;
                    txtTomorrowYear = txtYear + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtTomorrowYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if (txtTomorrowDay > 30) {
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }
        } else {
            if(txtMonth == 2){
                if(txtTomorrowDay > 28){
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 1 || txtMonth == 3 || txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10){
                if(txtTomorrowDay > 31){
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if ( txtMonth == 12){
                if (txtTomorrowDay > 31) {
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = 1;
                    txtTomorrowYear = txtYear + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtTomorrowYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if (txtTomorrowDay > 30) {
                    txtTomorrowDay = 1;
                    txtTomorrowMonth = txtMonth + 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }
        }
    }else{
        console.log('not ok');
    }
}

function findTheDayBefore(txtDay,txtMonth,txtYear) {
    txtTDay = document.getElementById('txtTDay');
    if (checkDayMonthYear(txtDay,txtMonth,txtYear) == true){
        txtTomorrowDay = txtDay - 1;
        if (checkLeapYear(txtYear)){
            if(txtMonth == 2){
                if(txtTomorrowDay < 1){
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear);
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10 || txtMonth == 12){
                if(txtTomorrowDay < 1){
                    txtTomorrowDay = 30;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if ( txtMonth == 1){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = 12;
                    txtTomorrowYear = txtYear - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtTomorrowYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 3){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 29;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }else if (txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }
        } else {
            if(txtMonth == 2){
                if(txtTomorrowDay < 1){
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10 || txtMonth == 12){
                if(txtTomorrowDay < 1){
                    txtTomorrowDay = 30;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 1){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = 12;
                    txtTomorrowYear = txtYear - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtTomorrowYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            } else if (txtMonth == 3){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 28;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }else if (txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if (txtTomorrowDay < 1) {
                    txtTomorrowDay = 31;
                    txtTomorrowMonth = txtMonth - 1;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }else{
                    txtTomorrowDay;
                    txtTomorrowMonth = txtMonth;
                    printHTML(txtTomorrowDay, txtTomorrowMonth, txtYear)
                }
            }
        }
    }else{
        console.log('not ok');
    }
}

function findDayInMonth(txtDay,txtMonth,txtYear) {
    if(checkDayMonthYear(txtDay, txtMonth, txtYear) == true){
        if(txtMonth == 1 || txtMonth == 3 || txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10 || txtMonth == 12){
            printDayHTML(31);
        } else if (txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
            printDayHTML(30);
        }
        if(checkLeapYear(txtYear)){
            if (txtMonth == 2){
                printDayHTML(29);
            }
        } else {
            if (txtMonth == 2){
                printDayHTML(28);
            }
        }
    }
    
}

function checkLeapYear(txtYear)
{
  return ((txtYear % 4 == 0) && (txtYear % 100 != 0)) || (txtYear % 400 == 0);
}

function printHTML(txtTomorrowDay, txtTomorrowMonth, txtTomorrowYear) {
    txtTDay = document.getElementById('txtTDay');
    txtTMonth = document.getElementById('txtTMonth');
    txtTYear = document.getElementById('txtTYear');
    findResult = document.getElementById('findResult');
    txtTDay.innerHTML = txtTomorrowDay;
    txtTMonth.innerHTML = txtTomorrowMonth;
    txtTYear.innerHTML = txtTomorrowYear;
    findResult.innerHTML = 'Day -> ' + txtTomorrowDay + ' - Month -> ' + txtTomorrowMonth + ' - Year -> ' + txtTomorrowYear;
}

function printDayHTML(txtDay) {
    document.getElementById('findDayResult').innerHTML = 'This month have ' + txtDay + ' days';
}

function checkDayMonthYear(txtDay,txtMonth,txtYear) {
    if(txtYear == 0){
        findResult.innerHTML = yearError;
        return false;
    }else if (txtYear.toString().length != 4){
        findResult.innerHTML = yearLength;
        return false;
    }
    else{
        if(checkLeapYear(txtYear)){
            if(txtMonth < 1 || txtMonth > 12){
                findResult.innerHTML = monthRange;
                return false;
            }else if(txtMonth == 2){
                if(txtDay < 1 || txtDay > 29){
                    findResult.innerHTML = dayMonth2Leap;
                    return false;
                }
            }else if(txtMonth == 1 || txtMonth == 3 || txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10 || txtMonth == 12){
                if(txtDay < 1 || txtDay > 31){
                    findResult.innerHTML = dayRangeOdd;
                    return false;
                }
            }else if(txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if(txtDay < 1 || txtDay > 30){
                    findResult.innerHTML = dayRangeEven;
                    return false;
                }
            }
        } else{
            if(txtMonth < 1 || txtMonth > 12){
                findResult.innerHTML = monthRange;
                return false;
            }else if(txtMonth == 2){
                if(txtDay < 1 || txtDay > 28){
                    findResult.innerHTML = dayMonth2;
                    return false;
                }
            }else if(txtMonth == 1 || txtMonth == 3 || txtMonth == 5 || txtMonth == 7 || txtMonth == 8 || txtMonth == 10 || txtMonth == 12){
                if(txtDay < 1 || txtDay > 31){
                    findResult.innerHTML = dayRangeOdd;
                    return false;
                }
            }else if(txtMonth == 4 || txtMonth == 6 || txtMonth == 9 || txtMonth == 11){
                if(txtDay < 1 || txtDay > 30){
                    findResult.innerHTML = dayRangeEven;
                    return false;
                }
            }
        }
    }
    return true;
}

// ----------------------------------------
const numberRange = 'Number should be in range (1-4)';
const hundred = ' một trăm';
const fiveHundred = ' năm trăm ';
const oddOne = ' lẻ một';
const oddFive = ' lẻ năm';
const eleven = ' mười một';
const fifteen = ' mười lăm';
const fifty = ' năm mươi ';
const fiftyOne = ' năm mươi mốt ';
const fiftyFive = ' năm mươi lăm ';




readResult = document.getElementById('readResult');
document.getElementById('btnRead').addEventListener('click', function () {
    txtThreeNumber = +document.getElementById('txtThreeNumber').value;
    readNumber(txtThreeNumber);
});

function readNumber(txtThreeNumber) {
    if (checkNumber(txtThreeNumber)) {
        if(txtThreeNumber.toString().charAt(0) == '-'){
            let minus = 'Âm ';
            let strChr1 = txtThreeNumber.toString().charAt(1);
            switch (txtThreeNumber.toString().length) {
                case 2:
                    readResult.innerHTML = minus + case2(txtThreeNumber,1);
                    break;
                case 3:
                    readResult.innerHTML = minus + case3x(txtThreeNumber,1,2);
                    break;
                case 4:
                    if(strChr1 == '1'){
                        readResult.innerHTML = minus + case1xx(txtThreeNumber,2,3,3,2,3,2,2,2,3);
                    }
                    else if(strChr1 == '5'){
                        readResult.innerHTML = minus +case5xx(txtThreeNumber,2,3,3,3,2,3,2,2);
                    }
                    else{
                        readResult.innerHTML = minus +caseAllxx(txtThreeNumber,2,3,1,3,2);
                    }
                    break;    
                default:
                    break;
            }
        }else{
            let strChr1 = txtThreeNumber.toString().charAt(0);
            switch (txtThreeNumber.toString().length) {
                case 1:
                    readResult.innerHTML = case2(txtThreeNumber,0);
                    break;
                case 2:
                    readResult.innerHTML = case3x(txtThreeNumber,0,1);
                    break;
                case 3:
                    if(strChr1 == '1'){
                        readResult.innerHTML = case1xx(txtThreeNumber,1,2,2,1,2,1,1,1,2);
                    }
                    else if(strChr1 == '5'){
                        readResult.innerHTML = case5xx(txtThreeNumber,1,2,2,2,1,2,1,1);
                    }
                    else{
                        readResult.innerHTML = caseAllxx(txtThreeNumber,1,2,0,2,1);
                    }
                    break;    
                default:
                    break;
            }
        }
    }else{
        console.log('not ok');
    }
}

function case2(txtThreeNumber,position) {
    let strChr1 = txtThreeNumber.toString().charAt(position);
    let result = '';
    if(strChr1 == '1'){
        result = ' một';
    }else if(strChr1 == '5'){
        result = ' năm';
    }
    else {
        result = ' ' + parseUnit(txtThreeNumber, position);
    }
    return result;
}

function case3x(txtThreeNumber,positionX,positionY) {
    let strChr1 = txtThreeNumber.toString().charAt(positionX);
    let strChr2 = txtThreeNumber.toString().charAt(positionY);
    let result = '';
    if(strChr1 == '1'){
        if(strChr2 == '1'){
            result = eleven;
        }else if(strChr2 == '5'){
            result = fifteen
        }
        else {
            result = ' mười ' + parseUnit(txtThreeNumber, positionY);
        }
    }
    else if(strChr1 == '5'){
        if(strChr2 == '1'){
            result = fiftyOne;
        }else if(strChr2 == '5'){
            result = fiftyFive;
        }
        else {
            result = fifty + parseUnit(txtThreeNumber, positionY);
        }
    }
    else {
        if(strChr2 == '1'){
            result = ' ' + parseUnit(txtThreeNumber, positionX) + ' mươi mốt';
        }
        else if(strChr2 == '5'){
            result =  ' ' + parseUnit(txtThreeNumber, positionX) + ' mươi lăm';
        }else{
            result =  ' ' + parseUnit(txtThreeNumber, positionX) + ' mươi ' + parseUnit(txtThreeNumber, positionY);
        }
        
    }
    return result;
}

function case1xx(txtThreeNumber,positionX,positionY,positionZ,positionA,positionB,positionC,positionD,positionE,positionF) {
    let strChr2 = txtThreeNumber.toString().charAt(positionX);
    let strChr3 = txtThreeNumber.toString().charAt(positionY);
    let result = '';
        //chục = 0
        if(strChr2 == '0'){
            // dv = 0
            if(strChr3 == '0'){
                result = hundred;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  hundred + oddOne;
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  hundred + oddFive;
                return result;
            }
            // dv # all
            else{
                result =   hundred +' lẻ '+ parseUnit(txtThreeNumber,3);
                return result;
            }
        }
        //chục = 1
        else if(strChr2 == '1'){
            // dv = 0
            if(strChr3 == '0'){
                result =  hundred + 'mười';
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  hundred + eleven;
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
               result =   hundred + fifteen;
                return result;
            }
            // dv # all
            else{
                result =  toSeparate11x(txtThreeNumber,positionZ);
                return result;
            }
        }
        //chục = 5
        else if(strChr2 == '5'){
            // dv = 0
            if(strChr3 == '0'){
                result =  hundred + fifty;
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  hundred + fiftyOne;
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  hundred + fiftyFive;
                return result;
            }
            // dv # all
            else{
                result =  toSeparate15x(txtThreeNumber, positionZ);
                return result;
            }

        }
        // chục # all
        else{// dv = 0
            if(strChr3 == '0'){
                result =  toSeparateZero(txtThreeNumber,positionA,positionB);
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  toSeparateOne(txtThreeNumber,positionC);
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  toSeparateFive(txtThreeNumber,positionD)
                return result;
            }
            // dv # all
            else{
                result =  toSeparateAll(txtThreeNumber,positionE,positionF)
                return result;
            }
        }
        return result;
}

function toSeparate11x(txtThreeNumber, position) {
    return result =  hundred + ' mười ' + parseUnit(txtThreeNumber, position);
}
function toSeparate15x(txtThreeNumber, position) {
    return result =  hundred + fifty + parseUnit(txtThreeNumber, position);
}

function toSeparateZero(txtThreeNumber, positionA,positionB) {
    return result =  hundred + ' ' + parseUnit(txtThreeNumber, positionA) + ' mươi ' + parseUnit(txtThreeNumber, positionB);
}

function toSeparateOne(txtThreeNumber, positionC) {
    return result =  hundred + ' ' + parseUnit(txtThreeNumber, positionC) + ' mươi mốt';
}

function toSeparateFive(txtThreeNumber, positionD) {
    return result =  hundred + ' ' + parseUnit(txtThreeNumber, positionD) + ' mươi lăm';
}
function toSeparateAll(txtThreeNumber, positionE,positionF) {
    return result =  hundred + ' ' + parseUnit(txtThreeNumber, positionE) + ' mươi ' + parseUnit(txtThreeNumber, positionF);
}
function case5xx(txtThreeNumber,postionX,positionY,positionZ,positionA,positionB,positionC,positionD,positionE) {
    let strChr2 = txtThreeNumber.toString().charAt(postionX);
    let strChr3 = txtThreeNumber.toString().charAt(positionY);
    let result = '';
    if(strChr2 == '0'){
        // dv = 0
        if(strChr3 == '0'){
           result =  fiveHundred;
           return result;
        }
        // dv = 1
        else if(strChr3 == '1'){
            result =  fiveHundred + oddOne;
            return result;
        }
        // dv = 5
        else if (strChr3 == '5') {
            result =  fiveHundred + oddFive;
            return result;
        }
        // dv # all
        else{
            result =  fiveHundred + ' lẻ '+ parseUnit(txtThreeNumber,3);
            return result;
        }
    }
    //chục = 1
    else if(strChr2 == '1'){
        // dv = 0
        if(strChr3 == '0'){
            result =  fiveHundred + ' mười';
            return result;
        }
        // dv = 1
        else if(strChr3 == '1'){
            result =  fiveHundred + eleven;
            return result;
        }
        // dv = 5
        else if (strChr3 == '5') {
           result =   fiveHundred + fifteen;
            return result;
        }
        // dv # all
        else{
            result =  toSeparate51x(txtThreeNumber,positionZ);
            return result;
        }
    }
    //chục = 5
    else if(strChr2 == '5'){
        // dv = 0
        if(strChr3 == '0'){
            result =  fiveHundred + fifty;
            return result;
        }
        // dv = 1
        else if(strChr3 == '1'){
            result =  fiveHundred + fiftyOne;
            return result;
        }
        // dv = 5
        else if (strChr3 == '5') {
            result =  fiveHundred + fiftyFive;
            return result;
        }
        // dv # all
        else{
            result =  toSeparate55x(txtThreeNumber,positionA);
            return result;
        }

    }
    // chục # all
    else{// dv = 0
        if(strChr3 == '0'){
            result =  toSeparate5Allx(txtThreeNumber,positionB,positionC);
            return result;
        }
        // dv = 1
        else if(strChr3 == '1'){
            result =  toSeparate5Allxx(txtThreeNumber,positionD)
            return result;
        }
        // dv = 5
        else if (strChr3 == '5') {
            result =  toSeparate5Allxxx(txtThreeNumber,positionE)
            return result;
        }
        // dv # all
        else{
            result =  toSeparate5Allx(txtThreeNumber,positionB,positionC);
            return result;
        }
    }
}

function toSeparate51x(txtThreeNumber,positionZ) {
    return fiveHundred + ' mười ' + parseUnit(txtThreeNumber, positionZ);
}

function toSeparate55x(txtThreeNumber,positionA) {
    return fiveHundred + fifty + parseUnit(txtThreeNumber, positionA);
}
function toSeparate5Allx(txtThreeNumber,positionB,positionC) {
    return fiveHundred + parseUnit(txtThreeNumber, positionB) + ' mươi ' + parseUnit(txtThreeNumber, positionC);
}
function toSeparate5Allxx(txtThreeNumber,positionD) {
    return fiveHundred + parseUnit(txtThreeNumber, positionD) + ' mươi mốt';
}
function toSeparate5Allxxx(txtThreeNumber,positionE) {
    return fiveHundred + parseUnit(txtThreeNumber, positionE) + ' mươi lăm';
}

function caseAllxx(txtThreeNumber,positionA,positonB,positionC,positionD,positionE) {
    let strChr2 = txtThreeNumber.toString().charAt(positionA);
    let strChr3 = txtThreeNumber.toString().charAt(positonB);
    let result = '';
        //chục = 0
        if(strChr2 == '0'){
            // dv = 0
            if(strChr3 == '0'){
               result =  parseUnit(txtThreeNumber, positionC) + ' trăm';
               return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm lẻ một';
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  parseUnit(txtThreeNumber, positionC) +' trăm lẻ năm';
                return result;
            }
            // dv # all
            else{
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm lẻ '+ parseUnit(txtThreeNumber,positionD);
                return result;
            }
        }
        //chục = 1
        else if(strChr2 == '1'){
            // dv = 0
            if(strChr3 == '0'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm mười';
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm mười một';
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
               result =   parseUnit(txtThreeNumber, positionC) + ' trăm mười lăm';
                return result;
            }
            // dv # all
            else{
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm mười ' + parseUnit(txtThreeNumber, 3);
                return result;
            }
        }
        //chục = 5
        else if(strChr2 == '5'){
            // dv = 0
            if(strChr3 == '0'){
                result =  parseUnit(txtThreeNumber, positionC) +  ' trăm năm mươi';
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm năm mươi mốt';
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm năm mươi lăm';
                return result;
            }
            // dv # all
            else{
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm năm mươi ' + parseUnit(txtThreeNumber, positionD);
                return result;
            }

        }
        // chục # all
        else{// dv = 0
            if(strChr3 == '0'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm ' + parseUnit(txtThreeNumber, positionE) + ' mươi ' + parseUnit(txtThreeNumber, positionD);
                return result;
            }
            // dv = 1
            else if(strChr3 == '1'){
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm ' + parseUnit(txtThreeNumber, positionE) + ' mươi mốt';
                return result;
            }
            // dv = 5
            else if (strChr3 == '5') {
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm ' + parseUnit(txtThreeNumber, positionE) + ' mươi lăm';
                return result;
            }
            // dv # all
            else{
                result =  parseUnit(txtThreeNumber, positionC) + ' trăm ' + parseUnit(txtThreeNumber, positionE) + ' mươi ' + parseUnit(txtThreeNumber, positionD);
                return result;
            }
        }
}


function parseUnit(txtThreeNumber,position) {
    let two,three,four,six,seven,eight,nine,result = '';
     if(txtThreeNumber.toString().charAt(position) == '2'){
        two = 'hai';
        result = two;
    }else if(txtThreeNumber.toString().charAt(position) == '3'){
        three = 'ba';
        result = three;
    }else if(txtThreeNumber.toString().charAt(position) == '4'){
        four = 'bốn';
        result = four;
    }else if(txtThreeNumber.toString().charAt(position) == '6'){
        six = 'sáu';
        result = six;
    }else if(txtThreeNumber.toString().charAt(position) == '7'){
        seven = 'bảy';
        result = seven;
    }else if(txtThreeNumber.toString().charAt(position) == '8'){
        eight = 'tám';
        result = eight;
    }else if(txtThreeNumber.toString().charAt(position) == '9'){
        nine = 'chín';
        result = nine;
    }
    return result;
}


function checkNumber(txtThreeNumber) {
    if(txtThreeNumber < -999 || txtThreeNumber > 999 || txtThreeNumber == ''){
        readResult.innerHTML = numberRange;
        return false;
    }
    return true
}

// ----------------------------------------
const text = ' is student farthest from school';

distanceResult = document.getElementById('distanceResult');
document.getElementById('btnDistance').addEventListener('click', function () {
    txtFirstStudent = document.getElementById('txtFirstStudent').value;
    txtSecondStudent = document.getElementById('txtSecondStudent').value;
    txtThirdStudent = document.getElementById('txtThirdStudent').value;

    txtFSCoordinatesX = +document.getElementById('txtFSCoordinatesX').value;
    txtFSCoordinatesY = +document.getElementById('txtFSCoordinatesY').value;
    txtSSCoordinatesX = +document.getElementById('txtSSCoordinatesX').value;
    txtSSCoordinatesY = +document.getElementById('txtSSCoordinatesY').value;
    txtTSCoordinatesX = +document.getElementById('txtTSCoordinatesX').value;
    txtTSCoordinatesY = +document.getElementById('txtTSCoordinatesY').value;

    if(txtFirstStudent && txtSecondStudent && txtThirdStudent && txtFSCoordinatesX && txtFSCoordinatesY && txtSSCoordinatesX && txtSSCoordinatesY && txtTSCoordinatesX && txtTSCoordinatesY != null){
        distanceResult.innerHTML = calculateDistance(txtFSCoordinatesX,txtFSCoordinatesY,txtSSCoordinatesX,txtSSCoordinatesY,txtTSCoordinatesX,txtTSCoordinatesY,0,0,txtFirstStudent,txtSecondStudent,txtThirdStudent);
    }
    
});

function calculateDistance(firstDistanceX,firstDistanceY,secondDistanceX,secondDistanceY,thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY, nameFirstStudent, nameSecondStudent, nameThirdStudent) {
    let result = '';
    if((calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) == calFirstDistance(secondDistanceX,secondDistanceY,schoolCoordinatesX,schoolCoordinatesY)) && (calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) == (calFirstDistance(thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY)))){
        result = nameFirstStudent + ' , ' + nameSecondStudent + ' and ' + nameThirdStudent+ text;
    }
    else if (calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) == calFirstDistance(secondDistanceX,secondDistanceY,schoolCoordinatesX,schoolCoordinatesY)) {
        result = nameFirstStudent + ' and ' + nameSecondStudent+ text;
    }
    else if(calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) > calFirstDistance(secondDistanceX,secondDistanceY,schoolCoordinatesX,schoolCoordinatesY)){
        if(calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) > calFirstDistance(thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY)){
            result = nameFirstStudent + text;
        }else if(calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) == calFirstDistance(thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY)){
            result = nameFirstStudent + ' and ' + nameThirdStudent+ text;
        }
        else{
            result = nameThirdStudent + text;
        }
    }
    else if(calFirstDistance(secondDistanceX,secondDistanceY,schoolCoordinatesX,schoolCoordinatesY) > calFirstDistance(thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY)){
        result = nameSecondStudent + text;
        
    }
    else if(calFirstDistance(secondDistanceX,secondDistanceY,schoolCoordinatesX,schoolCoordinatesY) == calFirstDistance(thirdDistanceX,thirdDistanceY,schoolCoordinatesX,schoolCoordinatesY)){
        result = nameSecondStudent + ' and ' + nameThirdStudent+ text;
    }
    else {
        result = nameThirdStudent + text;
    }
    return result;
}

function calFirstDistance(firstDistanceX,firstDistanceY,schoolCoordinatesX,schoolCoordinatesY) {
   return result = Math.sqrt(Math.pow(schoolCoordinatesX - firstDistanceX,2) + Math.pow(schoolCoordinatesY - firstDistanceY,2));
}