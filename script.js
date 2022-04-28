function convertToRoman(num) {
    let romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let roman = "";
    
    for (let key in romanToNum) {
        // console.log("key: ", key)
        // console.log("value: ", romanToNum[key]);
        while (num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
            document.getElementById('numberToConvert').innerHTML = roman;
        }
    }

document.getElementById('romanLetter').value = roman;

}

document.getElementById('convert').addEventListener('click', function() {
    let num = document.getElementById('numberToConvert').value;
    
    convertToRoman(num);

});
